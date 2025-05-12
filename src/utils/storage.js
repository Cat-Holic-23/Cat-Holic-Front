// 토큰 저장 관리리
const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

//토큰 저장
export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

//로그인 된 사용자 토큰 - 헤덩에 값 넣음
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

//로그아웃시 토큰 삭제
export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

//로그인 여부 확인
export const isLoggedIn = () => {
  return !!getAccessToken();
};

// 리프레시 토큰 저장
export const setRefreshToken = (token) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};
// 리프레시 토큰 반환
export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};
//리프레시 토큰 삭제
export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

//로그아웃 처리리
export const logout = () => {
  removeAccessToken();
  removeRefreshToken();
  window.location.href = "/login";
};

//자동 로그아웃 - 토큰 만료 확인
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const hasValidToken = () => {
  const token = getAccessToken();
  if (!token) return false;
  const payload = parseJwt(token);
  if (!payload?.exp) return false;
  const now = Math.floor(Date.now() / 1000);
  return payload.exp > now;
};

// JWT 토큰 정보 추출
export const getUserInfoFromToken = () => {
  const token = getAccessToken();
  if (!token) return null;
  const payload = parseJwt(token);
  return payload || null;
};
