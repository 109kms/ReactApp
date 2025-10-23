import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../api/authAPI";
import CookieUtils from "../utils/cookies";

//----- 쿠키 이름은 accessToken입니다.

//----- 비동기 액션
/**
 * 회원가입 비동기 액션
 * 
 * createAsyncThunk() 함수는 3개의 액션을 자동으로 생성합니다.
 * 1. auth/register/pending - 요청 시작
 * 2. auth/register/fulfilled - 요청 성공
 * 3. auth/register/rejected - 요청 실패
 */
export const registerUser = createAsyncThunk(
  "auth/register",  // 액션 타입
  async (userData, { rejectWithValue }) => {
    try {
      // 회원가입시도
      const response = await authAPI.register(userData);
      // 회원가입 성공시 JWT 토큰을 쿠키에 저장
      CookieUtils.set("accessToken", (await response).data.accessToken, {
        expires: 1,      // 1일 후 만료
        secure: false,   // 개발환경 (http 쿠키 전송 가능)
        sameSite: "lax", // 안전한 요청은 쿠키 전송
      });
      // 회원가입 성공시 서버의 응답 데이터를 반환 (fulfilled 액션의 payload가 됩니다.)
      return response.data;
    } catch (error) {
      // 회원가입 실패 시 예외 메시지를 rejected 액션의 payload로 반환
      return rejectWithValue(
        error.response.data.message || "회원가입이 실패했습니다."
      );
    }
  }
)

// 2. 로그인


//----- 초기상태
const initialState = {
  loginUser: null,  // 로그인 상태의 사용자 정보
  accessToken: CookieUtils.get("accessToken"),  // 액세스 토큰
  isAuthenticated: !!CookieUtils.get("accessToken"),  // 인증 여부 (boolean)
  error: null,  // 에러 메시지
};

//----- Slice
const authSlice = createSlice({
  name: "auth",  // 슬라이스 이름
  initialState,  // 초기 상태

  // reducers
  // 동기 액션 정의하는 부분입니다.
  // 여기에 정의한 함수는 자동으로 액션 생성자가 됩니다.
  reducers: {
    /**
     * 로그아웃 액션
     * 
     * - 액션 타입  : "auth/logout"
     * - 액션 생성자: logout() - 자동으로 생성되는 함수
     * 
     * - 액션 생성자 호출 (실행하고 싶을 때)
     * dispatch(logout())
     */
    logout: (state) => {
      // 리덕스 툴킷의 경우 Immer 라이브러리가 직접 state를 수정하더라도 새로운 state를 반환하는 방식으로 처리합니다.
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.error = null;
      // accessToken 쿠키 제거
      CookieUtils.remove("accessToken", {});
    }
  },
  // extraReducers
  // 외부에서 생성한 액션을 처리합니다.
  // 주로 createAsyncThunk()를 이용한 비동기 액션을 처리합니다.
  extraReducers: (builder) => {  // builder 패턴을 이용한 액션 타입 처리

    //----- 회원가입 액션 처리
    builder

      // 회원가입 요청 시작 (pending)
      // registerUser.pending 액션이 dispatch 될 때 실행되는 부분
      .addCase(register.pending, (state, action) => {

      })

      // 회원가입 성공 (fulfilled)
      // registerUser.fulfilled 액션이 dispatch 될 때 실행되는 부분
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loginUser = {
          email: action.payload.email,
          nickname: action.payload.nickname,
        }
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })

      // 회원가입 실패 (rejected)
      // registerUser.rejected 액션이 dispatch 될 때 실행됩니다.
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;  // action.payload에는 rejectWithValue() 함수로 전달된 메시지가 저장되어 있습니다.
      });

      //----- 로그인 액션 처리

      builder

        .addCase()

        .addCase()

        .addCase();

  }
});

/**
 * 액션 생성자를 export
 * authSlice.actions에는 reducers에 정의한 함수들이
 * 액션 생성자로 자동 변환되어 있습니다.
 */
export const { logout } = authSlice.actions;

/**
 * 리듀서 함수를 default export
 * 이 리듀서는 store에서 사용합니다.
 */
export default authSlice;