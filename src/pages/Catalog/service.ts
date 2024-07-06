import { axiosInstance } from '@nursery/config/axios';

export const fetchPlantCards = async () => {
  const { data } = await axiosInstance.get<PlantCardType[]>(`catalog`);
  return data;
}
