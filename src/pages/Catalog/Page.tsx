import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Loader } from '@nursery/components';
import { ButtonText } from '@nursery/styles';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Filter } from './components';
import { Card } from './components/Card';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const { ref, inView } = useInView();

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['cards'],
    queryFn: fetchPlantCards,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextNumberPage
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  console.log(data);

  return (
    <div className='w-full flex justify-center'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>{error.message}</p>)}
      {status === 'success' && (
        <div className='flex justify-evenly gap-5 p-2'>
          <Filter />
          <div className='w-full flex flex-col gap-2'>
            <div className='flex-1 flex flex-wrap justify-evenly gap-10'>
              {data.pages.map(({ page }) => page.content.map(card =>
                <Card
                  key={card.id}
                  plantId={card.id}
                  commonName={card.commonName}
                  scientificName={card.scientificName}
                  status={card.status}
                  imageUrl='https://cdn.pixabay.com/photo/2023/09/05/10/00/plant-8234767_1280.jpg'
                />
              ))}
            </div>
            <div className='flex justify-center bg-nursery-medium' ref={ref}>
              {isFetchingNextPage ?
                <Loader /> :
                hasNextPage ?
                  <ButtonText className='button' onClick={() => fetchNextPage()}>Cargar m&aacute;s plantas</ButtonText> :
                  <p className='text-center font-medium p-2'>No hay mas plantas para mostrar, vuelva mas tarde.</p>
              }
            </div>
            <div>
              {isFetching && !isFetchingNextPage ? 'Background Updating...' : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
