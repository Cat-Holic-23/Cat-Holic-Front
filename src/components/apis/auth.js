import instance from "@/libs/axios";
import { setAccessToken } from "@/utils/storage";

// 회원가입
export const join = async (data) => {
  try {
    const response = await instance.post("/join", data);
    const token =
      response.headers["authorization"] || response.headers["Authorization"];
    if (token) {
      setAccessToken(token);
    }
    return response;
  } catch (error) {
    throw error;
  }
};

// 로그인
export const login = async (data) => {
  try {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const response = await instance.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const token =
      response.headers["authorization"] || response.headers["Authorization"];
    if (token) {
      setAccessToken(token);
    }
    return response;
  } catch (error) {
    throw error;
  }
};

// 회원정보 조회
export const getUserInfo = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//닉네임
export const getNickname = async () => {
  try {
    const response = await instance.get("/users");
    console.log("getNickname response.data:", response.data);
    return response.data.nickname || "";
  } catch (error) {
    console.error("getNickname error:", error);
    throw error;
  }
};
