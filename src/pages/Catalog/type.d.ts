import { StatusType } from '@nursery/types/commons';

type PlantCardType = {
  id: number;
  commonName: string;
  scientificName?: string;
  status: StatusType;
  imageId?: string;
};

type PageType = {
	content: PlantCardType[];
	first: boolean;
  last: boolean;
	empty: boolean;
  size: number;
	numberOfElements: number;
  number: number;
  totalPages: number;
  totalElements: number;
};
