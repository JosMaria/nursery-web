import { useEffect } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { fetchPlantCards } from '../service';
import { PageType } from '../type';
import { Card } from './Card';
import { Navbar } from './Navbar';
import { Pagination } from './Pagination';

type ContentProps = {
  pageContent: PageType;
  numberPage: number;
  isPlaceholderData: boolean;
  classification: string | null;
  setSearchParams: SetURLSearchParams;
};

export const Content = ({ pageContent, numberPage, isPlaceholderData, classification, setSearchParams }: ContentProps) => {
  const isEmptyContent = pageContent.first && classification == null && pageContent.content.length === 0;
  return isEmptyContent ? <EmptyContent /> :
    <PlantCardPage
      pageContent={pageContent}
      numberPage={numberPage}
      isPlaceholderData={isPlaceholderData}
      classification={classification}
      setSearchParams={setSearchParams}
    />;
};

const EmptyContent = () => (
  <section className='flex flex-col justify-start items-center m-1'>
    <div className='flex flex-col gap-1 bg-nursery-medium border-2 border-nursery-dark w-full max-w-sm px-3 py-1'>
      <h2 className='font-medium text-base sm:text-lg text-center'>No hay plantas registradas</h2>
      <p className='text-sm text-justify'>
        El vivero de FDRyT no se registro ninguna planta en esta plataforma por el momento,
        una vez que tengan algun ejemplar sera mostrado en el catalogo
      </p>
    </div>
  </section>
);

const PlantCardPage = ({ pageContent, numberPage, isPlaceholderData, classification, setSearchParams }: ContentProps) => {
  const queryClient = useQueryClient();

  const updatePage = (move: 'first' | 'previous' | 'next' | 'last') => {
    if (move === 'first') {
      setSearchParams({ page: '0' });

    } else if (move === 'previous') {
      const newPageNumber = Math.max(numberPage - 1, 0);
      setSearchParams({ page: String(newPageNumber) });

    } else if (move === 'next') {
      const newPageNumber = pageContent.last ? numberPage : numberPage + 1;
      setSearchParams({ page: String(newPageNumber) });

    } else if (move === 'last') {
      const newPageNumber = pageContent.totalPages - 1;
      setSearchParams({ page: String(newPageNumber) });

    } else {
      throw new Error("Options 'previous' or 'next' have been not selected.");
    }
  }

  useEffect(() => {
    if (!isPlaceholderData && !pageContent.last) {
      queryClient.prefetchQuery({
        queryKey: ['cards', numberPage + 1, classification],
        queryFn: () => fetchPlantCards(numberPage + 1, classification),
      });
    }
  }, [pageContent, isPlaceholderData, numberPage, classification, queryClient]);

  return (
    <div className='w-full flex flex-col items-center justify-between gap-1'>
      {/* <Navbar classification={classification} setSearchParams={setSearchParams} /> */}
      <section className='flex flex-wrap gap-10 w-full p-2'>
        {pageContent.content.map(plant => (
          <Card
            key={plant.id}
            plantId={plant.id}
            commonName={plant.commonName}
            scientificName={plant.scientificName}
            status={plant.status}
            imageId={plant.imageId}
          />
        ))}
      </section>
      <Pagination
        updatePage={updatePage}
        numberPage={pageContent.number}
        isFirstPage={pageContent.first}
        isLastPage={pageContent.last}
        isPlaceholderData={isPlaceholderData}
      />
    </div>
  );
};
