// 커스텀 axios 인스턴스 API 요청청
import axios from 'axios';
import { getAccessToken } from '../utils/storage';

//axios 새로 생성성
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요처 토큰을 헤더에 붙임 - 로그인 후 자동으로 인증 처리
instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default instance;
