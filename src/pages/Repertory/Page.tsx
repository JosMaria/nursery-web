import { InputText, Title } from '@nursery/styles';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@nursery/components';
import { fetchAllItems } from './service';
import { ItemList, Paused, Searcher } from './components';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

export const RepertoryPage = () => {
  const { data: itemsFetched, status, isPaused } = useQuery({
    queryKey: ['items'],
    queryFn: fetchAllItems
  });

  if (isPaused) return <Paused />;

  return (
    <div className='flex justify-center m-2'>
      {status === 'pending' && <Loader />}
      {status === 'success' && (
        <section className='flex flex-col gap-2 max-w-2xl w-full'>
          <div className='flex flex-wrap justify-between'>
            <Title>Listado</Title>
            <Searcher isEnabled={itemsFetched.length > 0} />
          </div>
          <ItemList items={itemsFetched} />
        </section>
      )}
      {status === 'error' && (<p>hubo un error</p>)}
    </div>
  );
}
