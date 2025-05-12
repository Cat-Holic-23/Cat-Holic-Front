//로그인 api 관리리
import axios from "@/libs/axios";
import { setAccessToken } from "@/utils/storage";

const ERROR_MESSAGES = {
  "USR-001": "이미 존재하는 사용자입니다.",
  "COM-000": "성공",
  UNKNOWN_ERROR: "알 수 없는 에러가 발생했습니다.",
};

export async function join({ userName, password, nickname, age, gender }) {
  try {
    const res = await axios.post("/join", {
      userName,
      password,
      nickname,
      age,
      gender,
    });

    const data = res.data;

    if (data.code !== "COM-000") {
      throw new Error(ERROR_MESSAGES[data.code] || data.code);
    }

    const authHeader = res.headers["authorization"];
    if (authHeader) {
      const token = authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : authHeader;
      setAccessToken(token);
    }

    return data.data;
  } catch (err) {
    const errorCode = err?.response?.data?.code || "UNKNOWN_ERROR";
    throw new Error(ERROR_MESSAGES[errorCode] || errorCode);
  }
}