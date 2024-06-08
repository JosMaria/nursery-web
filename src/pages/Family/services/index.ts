import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v2/',
});

type FamilyResponseType = {
  id: string;
  name: string;
}

export const fetchAllFamilies = async (): Promise<FamilyResponseType[]> => {
  const { data } = await axiosInstance.get<FamilyResponseType[]>('families');
  return data;
};
