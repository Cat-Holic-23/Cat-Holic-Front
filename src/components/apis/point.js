import instance from "@/libs/axios";

//포인트 적립립
export const addPoint = async (points = 30) => {
  const response = await instance.post("/point", { points });
  return response.data;
};

//포인트 조회회
export const getUserPoint = async () => {
  const response = await instance.get("/users");
  return response.data.point || 0;
};
