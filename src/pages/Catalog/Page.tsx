import { useEffect, useState } from 'react';

import { Loader, Paused } from '@nursery/components';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';

import { Content } from './components';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { data: pageObtained, status, isPaused, isPlaceholderData } = useQuery({
    queryKey: ['cards', page],
    queryFn: () => fetchPlantCards(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
  
  if (isPaused) return <Paused />;

  useEffect(() => {
    if (!isPlaceholderData && !pageObtained?.last) {
      queryClient.prefetchQuery({
        queryKey: ['cards', page + 1],
        queryFn: () => fetchPlantCards(page + 1),
      });
    }
  }, [pageObtained, isPlaceholderData, page, queryClient]);

  return (
    <div className='flex justify-center m-1'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>hubo un error</p>)}
      {status === 'success' && (
        <Content
          pageContent={pageObtained}
          setPage={setPage}
        />
      )}
    </div>
  );
};
