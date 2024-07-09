import { useSearchParams } from 'react-router-dom';

import { Loader, Paused } from '@nursery/components';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { Content } from './components';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '0' });
  const numberPage = Number.parseInt(searchParams.get('page') ?? '0');

  const { data: pageObtained, status, isPaused, isPlaceholderData } = useQuery({
    queryKey: ['cards', numberPage],
    queryFn: () => fetchPlantCards(numberPage),
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
          numberPage={numberPage}
          setNumberPage={setSearchParams}
          isPlaceholderData={isPlaceholderData}
        />
      )}
    </div>
  );
};
