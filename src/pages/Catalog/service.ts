import { axiosInstance } from '@nursery/config/axios';

import { PageType } from './type';

export const fetchPlantCards = async (page = 0, classification: string | null) => {
  let requestParams = `page=${page}`;
  if (classification) {
    requestParams = `${requestParams}&classification=${classification}`;
  }

  const { data } = await axiosInstance.get<PageType>(`catalog?${requestParams}`);
  return data;
};
