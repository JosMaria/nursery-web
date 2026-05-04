export interface PlantSummaryResponse {
  id: number;
  scientific_name: string;
  is_favorite: boolean;
  is_visible: boolean;
}

export type PlantSummaryIncompleteResponse = Omit<PlantSummaryResponse, "is_visible">;
