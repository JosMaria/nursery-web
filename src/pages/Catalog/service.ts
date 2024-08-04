import { axiosInstance } from '@nursery/config/axios';

import { PageType } from './type';

export const fetchPlantCards = async ({ pageParam = 0 }) => {
  const { data: page } = await axiosInstance.get<PageType>(`catalog?page=${pageParam}`);
  const nextNumberPage = page.last ? undefined : page.number + 1;
  return { page, nextNumberPage };
};
