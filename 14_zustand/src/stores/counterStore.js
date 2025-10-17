/*
  zustand
  1. 비교적 간단한 사용법을 제공하는 상태 관리 라이브러리입니다.
  2. useState()처럼 간단한 방식이지만, 전역에서 상태를 사용할 수 있습니다.
  3. 상태를 관리하는 스토어를 만들어 상태와 액션을 정의합니다.
*/

// zustand 스토어 생성을 위한 create() 함수 import
import { create } from 'zustand';

// zustand 스토어 생성
const counterStore = create((set, get) => ({
  // 초기 상태값
  number: 0,

  // 액션1(increment)
  
}));