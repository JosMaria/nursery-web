export interface ImageSelectionResponse {
	image_id: number;
	is_selected: boolean;
};

export interface PathValuesImageSelect {
	plantId: number;
	imageId: number;
}

export interface PlantImageResponse {
	storage_path: string;
	filename: string;
	size: number;
};

export interface ImageToUpload {
	plantId: number;
	isSelected: boolean;
	formData: FormData;
	changePercentage: (percentage: number) => void;
};
