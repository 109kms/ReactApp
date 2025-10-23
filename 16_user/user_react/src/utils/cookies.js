class CookieUtils {

  /**
   * 쿠키 설정
   * @param { string } name - 쿠키 이름
   * @param { string } value - 쿠키 값
   * @param { object } options - 쿠키 옵션
   */
  static set( name, value, options) {
    //----- 쿠키 기본 문자열
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    //----- 쿠키 옵션 문자열
    // 1. expires 설정 (일 단위로 전달 받아 밀리초 단위로 설정)
    if (options.expires) {
      const date = new Date();
      date.setTime( date.getTime() + options.expires * 24 * 60 * 60 * 1000 );
      cookieString += `; expires=${date.toUTCString()}`;
    }

    // 2. path 설정 (전달되지 않으면 "/" 사용)
    cookieString += `; path=${options.path || "/"}`;

    // 3. domain 설정
    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    // 4. secure 설정 (false - 개발환경(http), true - 운영환경(https))
    if (options.secure) {
      cookieString += `; secure`;
    }

    // 5. sameStie 설정 (strict - 동일 사이트에서만 쿠키 전송, lax - 안전한 사이트 요청에는 쿠키 전송, none - 모든 요청에 쿠키 전송)
    if (options.sameSite) {
      cookieString += `; sameSite=${options.sameSite}`;
    }

    //----- 브라우저 쿠키 설정
    document.cookie = cookieString;

  }

  

}

export default CookieUtils;