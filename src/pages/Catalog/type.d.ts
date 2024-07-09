type PlantCardType = {
  id: string;
  commonName: string;
  scientificName?: string;
  family?: string;
  status: StatusType;
  photoUrl?: string;
};

type PageType = {
	content: PlantCardType[];
	first: boolean;
  last: boolean;
	empty: boolean;
  size: number;
	numberOfElements: number;
  number:number;
  totalPages: number;
  totalElements: number;
};
