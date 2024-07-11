import { axiosInstance } from '@nursery/config/axios';

export const fetchPlantCards = async (page = 0, classification: string) => {
  let requestParams = `page=${page}`;
  if (classification.length !== 0) {
    requestParams = `${requestParams}&classification=${classification}`;
  }

  const { data } = await axiosInstance.get<PageType>(`catalog?${requestParams}`);
  return data;
};
