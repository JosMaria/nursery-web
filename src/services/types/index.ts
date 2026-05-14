export interface ImageSelectionResponse {
	image_id: number;
	is_selected: boolean;
};

export interface ImageToUpload {
	plantId: number;
	isSelected: boolean;
	formData: FormData;
	changePercentage: (percentage: number) => void;
};
