import { useEffect, useState } from 'react';

import { axiosInstance } from '@/services/api';

import Table from './components';
import styles from './HomePage.module.scss';

import type { AxiosError, AxiosResponse } from 'axios';
import type { PlantSummaryIncompleteResponse, PlantSummaryResponse } from './types';

const MOCK_PLANT_SUMMARY_LIST: PlantSummaryResponse[] = [
  { id: 1, scientific_name: 'Ficus benjamina', is_favorite: true, is_visible: true },
  { id: 2, scientific_name: 'Monstera deliciosa', is_favorite: true, is_visible: true },
  { id: 3, scientific_name: 'Sanseviria trifasciata', is_favorite: true, is_visible: true },
  { id: 4, scientific_name: 'Spathiphyllum wallisii', is_favorite: false, is_visible: true },
  { id: 5, scientific_name: 'Calathea orbifolia', is_favorite: false, is_visible: false },
];

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError): Promise<AxiosResponse> => {
    if (error.config?.url === '/plants') {
      const mockResponse: AxiosResponse<PlantSummaryResponse[]> = {
        data: MOCK_PLANT_SUMMARY_LIST,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: error.config,
      }
      return Promise.resolve(mockResponse);
    }
    return Promise.reject(error);
  },
);

const fetchPlantSummaries = async (): Promise<PlantSummaryResponse[]> => {
  const { data: plantSummaryList } = await axiosInstance.get<PlantSummaryIncompleteResponse[]>('/plants', {
    transformResponse: [].concat(
      axiosInstance.defaults.transformResponse,
      (plantSummaryIncompleteList: PlantSummaryIncompleteResponse[]) =>
        plantSummaryIncompleteList.map(plantSummaryIncomplete => ({
          ...plantSummaryIncomplete,
           is_visible: true,
        })) 
    )
  });

  return plantSummaryList as PlantSummaryResponse[];
}

export const HomePage = () => {
  const [data, setData] = useState<PlantSummaryResponse[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const plants = await fetchPlantSummaries();
    setData(plants);
  }

  return (
    <div className={styles.homePageContainer}>
      <Table plants={data} />
    </div>
  );
}
