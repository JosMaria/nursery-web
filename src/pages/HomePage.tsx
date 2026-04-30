import { useEffect } from 'react';

import { axiosInstance } from '@/services/api';

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface PlantDataResponse {
  id: number;
  scientific_name: string;
}

const MOCK_PLANTS: PlantDataResponse[] = [
  { id: 1, scientific_name: "Ficus benjamina" },
  { id: 2, scientific_name: "Monstera deliciosa" },
  { id: 3, scientific_name: "Sansevieria trifasciata" },
  { id: 4, scientific_name: "Spathiphyllum wallisii" },
  { id: 5, scientific_name: "Calathea orbifolia" },
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
        config: error.config as InternalAxiosRequestConfig,
      }
      console.log(mockResponse);
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
  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div>Home Page</div>
  );
}
