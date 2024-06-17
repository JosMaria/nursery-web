import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v2/',
});

export const fetchAllFamilies = async () => {
  const { data } = await axiosInstance.get<AnswerFamilyType[]>('families');
  return data;
};

export const postFamilies = async (payload: PayloadCreateFamilyType[]) => {
  const { data } = await axiosInstance.post<AnswerFamilyType[]>('families/batch', payload);
  return data;
};

export const deleteFamilyByID = async (id: string) => {
  const { data } = await axiosInstance.delete<AnswerFamilyType>(`families/${id}`);
  return data;
};

export const updateFamilyNameByID = async (id: string, nameUpdated: string) => {
  const { data } = await axiosInstance.patch<AnswerFamilyType>(`families/${id}`, { name: nameUpdated });
  return data;
};
