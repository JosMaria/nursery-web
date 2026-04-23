import type { ImageSelectionResponse } from '../services/types';
import { Link } from 'react-router';

import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../services/api';

export const plantService = {
  getImagesToSelection: async (plantId: number) => {
    const uri = `/plants/${plantId}/images/selection`;
    const { data } = await axiosInstance.get<ImageSelectionResponse[]>(uri);
    return data;
  },
};

export const ImagePage = () => {
  const plantId = 1;
  const { data } = useQuery({
    queryKey: ['images'],
    queryFn: () => plantService.getImagesToSelection(plantId),
    staleTime: 60 * 1_000,
  });

  return (
    <div>
      {data?.map(imageSelection => <p key={imageSelection.image_id}>{JSON.stringify(imageSelection)}</p>)}
      <Link to='/'>to root</Link>
    </div>
  );
}
