import { create } from "zustand";

type PlantStoreType = {
  scientificNameGlobal: string;
  updateScientificName: (newScientificName: string) => void;
}

export const usePlantStore = create<PlantStoreType>()(
  set => ({
    scientificNameGlobal: '',
    updateScientificName: (scientificNameGlobal) => set({ scientificNameGlobal }),
  })
);
