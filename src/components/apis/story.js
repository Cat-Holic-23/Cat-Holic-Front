import instance from "@/libs/axios";
//스토리 생성
export const generateStory = async (socialSituation) => {
  const response = await instance.post("/generate", {
    social_situation: socialSituation,
  });
  return response.data;
};
// 스토리 저장
export const saveResult = async (result) => {
  const response = await instance.post("/results", result);
  return response.data;
};
// 답변 체크 
export const checkStory = async (id, userSelected) => {
  const response = await instance.post(`/gemini/${id}`, {
    user_selected: userSelected,
  });
  return response.data;
};
