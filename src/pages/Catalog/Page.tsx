import { useState } from 'react';

import { Loader, Paused } from '@nursery/components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { Content } from './components';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const [page, setPage] = useState(0);

  const { data: pageObtained, status, isPaused, isPlaceholderData } = useQuery({
    queryKey: ['cards', page],
    queryFn: () => fetchPlantCards(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  if (isPaused) return <Paused />;

  return (
    <div className='flex justify-center m-1'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>hubo un error</p>)}
      {status === 'success' && (
        <Content
          pageContent={pageObtained}
          page={page}
          setPage={setPage}
          isPlaceholderData={isPlaceholderData}
        />
      )}
    </div>
  );
};
