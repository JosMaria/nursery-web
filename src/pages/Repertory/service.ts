import { axiosInstance } from '@nursery/config/axios'

export const fetchAllItems = async () => {
  const { data } = await axiosInstance.get<AnswerItemType[]>('repertory');
  return data;
}
