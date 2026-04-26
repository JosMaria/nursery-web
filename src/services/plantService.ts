import { axiosInstance } from './api';

import type { ImageSelectionResponse } from "./types";

export const plantService = {
	getImagesToSelection: async (plantId: number) => {
		const uri = `/plants/${plantId}/images/selection`;
		const { data } = await axiosInstance.get<ImageSelectionResponse[]>(uri);
		return data;
	},
	updateSelectedImage: async (plantId: number, imageId: number) => {
		const { data: isChanged } = await axiosInstance.patch<Boolean>(`/plants/${plantId}/images/${imageId}`);
		return isChanged;
	},
	uploadPlantImage: async (plantId: number, isSelected: boolean,  formData: FormData) => {
		const uri = `/plants/${plantId}/images?selected=${isSelected}`;
		const { data } = await axiosInstance.post<PlantImageResponse>(uri, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
		});
		return data;
	},
};

interface PlantImageResponse {
	storage_path: string;
	filename: string;
	size: number;
};
