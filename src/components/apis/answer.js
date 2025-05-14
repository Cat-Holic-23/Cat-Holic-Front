import instance from "@/libs/axios";


export const saveResult = async (resultData) => {
  const response = await instance.post("/results", resultData);
  return response.data;
};


export const getResults = async () => {
  const response = await instance.get("/results");
  return response.data;
};


export const updateResult = async (id, updateData) => {
  const response = await instance.put(`/results/${id}`, updateData);
  return response.data;
};

export const deleteResult = async (id) => {
  const response = await instance.delete(`/results/${id}`);
  return response.data;
};
