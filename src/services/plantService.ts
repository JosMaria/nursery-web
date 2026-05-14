import type { AxiosProgressEvent } from 'axios';
import { axiosInstance } from './api';

import type { ImageSelectionResponse, ImageToUpload } from "./types";

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
	uploadPlantImage: async ({ plantId, isSelected, formData, changePercentage }: ImageToUpload) => {
		const uri = `/plants/${plantId}/images?selected=${isSelected}`;
		const { data } = await axiosInstance.post<PlantImageResponse>(uri, formData, {
			timeout: 30_000,
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: (progressEvent: AxiosProgressEvent) => {
				const progressTotal = progressEvent.total;
				if (progressTotal) {
					const percentage = Math.round(progressEvent.loaded * 100 / progressTotal);
					changePercentage(percentage);
				}
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
