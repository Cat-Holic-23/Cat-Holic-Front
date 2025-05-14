import instance from "@/libs/axios";

// 결과 저장
export const saveResult = async (resultData) => {
  const response = await instance.post("/results", resultData);
  return response.data;
};

// 결과 조회
export const getResults = async () => {
  const response = await instance.get("/results");
  return response.data;
};

// 결과 수정
export const updateResult = async (id, updateData) => {
  const response = await instance.put(`/results/${id}`, updateData);
  return response.data;
};

// 결과 삭제
export const deleteResult = async (id) => {
  const response = await instance.delete(`/results/${id}`);
  return response.data;
};
