import { axiosInstance } from '@nursery/config/axios';

export const fetchPlantCards = async (page = 0) => {
  const { data } = await axiosInstance.get<PageType>(`catalog?page=${page}`);
  return data;
};
