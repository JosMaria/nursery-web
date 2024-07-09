import { useEffect } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { fetchPlantCards } from '../service';
import { Card } from './Card';
import { Navbar } from './Navbar';
import { Pagination } from './Pagination';

type ContentProps = {
  pageContent: PageType;
  numberPage: number;
  setNumberPage: SetURLSearchParams;
  isPlaceholderData: boolean;
};

export const Content = ({ pageContent, numberPage, setNumberPage, isPlaceholderData }: ContentProps) => {
  const queryClient = useQueryClient();

  const updatePage = (move: 'first' | 'previous' | 'next' | 'last') => {
    if (move === 'first') {
      setNumberPage({ page: '0' });

    } else if (move === 'previous') {
      const newPageNumber = Math.max(numberPage - 1, 0);
      setNumberPage({ page: String(newPageNumber) });

    } else if (move === 'next') {
      const newPageNumber = pageContent.last ? numberPage : numberPage + 1;
      setNumberPage({ page: String(newPageNumber) });

    } else if (move === 'last') {
      const newPageNumber = pageContent.totalPages - 1;
      setNumberPage({ page: String(newPageNumber) });

    } else {
      throw new Error("Options 'previous' or 'next' have been not selected.");
    }
  }

  useEffect(() => {
    if (!isPlaceholderData && !pageContent.last) {
      queryClient.prefetchQuery({
        queryKey: ['cards', numberPage + 1],
        queryFn: () => fetchPlantCards(numberPage + 1),
      });
    }
  }, [pageContent, isPlaceholderData, numberPage, queryClient]);

  return (
    <div className='flex flex-col items-center gap-1 p-1'>
      <Navbar />
      <section className='flex-1 flex flex-wrap justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        {pageContent.content.map(plant => (
          <Card
            key={plant.id}
            id={plant.id}
            commonName={plant.commonName}
            scientificName={plant.scientificName ?? ''}
            family={plant.family ?? ''}
            status={plant.status}
            photoUrl={plant.photoUrl ?? ''}
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
}
