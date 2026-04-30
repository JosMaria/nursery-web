import { useEffect, useState } from 'react';

import { axiosInstance } from '@/services/api';

import Table from './components';
import styles from './HomePage.module.scss';

import type { AxiosError, AxiosResponse } from "axios";
import type { PlantDataResponse } from './types';

const MOCK_PLANTS: PlantDataResponse[] = [
  { id: 1, scientific_name: "Ficus benjamina", is_favorite: true },
  { id: 2, scientific_name: "Monstera deliciosa", is_favorite: true },
  { id: 3, scientific_name: "Sansevieria trifasciata", is_favorite: true },
  { id: 4, scientific_name: "Spathiphyllum wallisii", is_favorite: false },
  { id: 5, scientific_name: "Calathea orbifolia", is_favorite: false },
];

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError): Promise<AxiosResponse> => {
    if (error.config?.url === '/plants') {
      const mockResponse: AxiosResponse<PlantDataResponse[]> = {
        data: MOCK_PLANTS,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: error.config,
      }
      return Promise.resolve(mockResponse);
    }
    return Promise.reject(error);
  }
);

const fetchPlants = async () => {
  const { data } = await axiosInstance.get<PlantDataResponse[]>('/plants');
  return data;
}

export const HomePage = () => {
  const [data, setData] = useState<PlantDataResponse[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const plants = await fetchPlants();
    setData(plants);
  }

  return (
    <div className={styles.homePageContainer}>
      <Table plants={data} />
    </div>
  );
}
