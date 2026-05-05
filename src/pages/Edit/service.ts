import { axiosInstance } from '@/services/api';

import type { ImageSelectionResponse, PathValuesImageSelect } from '@/pages/Edit/types';

export const editPageService = {
  getImagesToSelection: async (plantId: number) => {
    const uri = `/plants/${plantId}/images/selection`;
    const { data: imagesToSelect } = await axiosInstance.get<ImageSelectionResponse[]>(uri);
    return imagesToSelect;
  },
  updateSelectedImage: async (values: PathValuesImageSelect) => {
    const uri = `/plants/${values.plantId}/images/${values.imageId}`;
    const { data: isChanged } = await axiosInstance.patch<Boolean>(uri);
    return isChanged;
  },
}
