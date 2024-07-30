import { useSearchParams } from 'react-router-dom';

import { Loader, Paused } from '@nursery/components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { Content } from './components';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '0' });
  const numberPage = Number.parseInt(searchParams.get('page') ?? '0');
  const classification = searchParams.get('classification') ?? null;

  const { data: pageObtained, status, isPaused, isPlaceholderData } = useQuery({
    queryKey: ['cards', numberPage, classification],
    queryFn: () => fetchPlantCards(numberPage, classification),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  if (isPaused) return <Paused />;

  return (
    <div className='w-full flex justify-center'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>hubo un error</p>)}
      {status === 'success' && (
        <Content
          pageContent={pageObtained}
          numberPage={numberPage}
          isPlaceholderData={isPlaceholderData}
          classification={classification}
          setSearchParams={setSearchParams}
        />
      )}
    </div>
  );
};
