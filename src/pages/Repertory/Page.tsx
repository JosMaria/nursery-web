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

  if (status === 'pending') {
    return (
      <section className='flex justify-center m-2'>
        <Loader />
      </section>
    )
  }

  if (status === 'success') {
    return (
      <div className='flex justify-center p-1'>
        <section className='flex flex-col gap-2 max-w-xl w-full'>
          <div className='flex flex-wrap justify-between'>
            <Title>Listado</Title>
            <Searcher />
          </div>
          <ItemList items={itemsFetched} />
        </section>
      </div>
    );
  }

  if (status === 'error') {
    return <p>hubo un error</p>
  }
}

/**
 * 
 * if (status === 'pending') {
    return <p className='bg-blue-300 p-2 m-2'>Esta en estado <b>pending</b></p>
  } else if (status === 'success') {
    return <p>{JSON.stringify(data, null, 4)}</p>
  } else if (status === 'error') {
    return <p>hubo un error</p>
  }

  if (fetchStatus === 'fetching') {
    return <p className='bg-green-600 p-2 m-2'>Esta en fetchStatus <b>fetching</b></p>;
  } else if (fetchStatus === 'paused') {
    return <p className='bg-green-600 p-2 m-2'>Esta en fetchStatus <b>paused</b></p>;
  } else if (fetchStatus === 'idle') {
    return <p className='bg-green-600 p-2 m-2'>Esta en fetchStatus <b>IDLE</b></p>;
  }
 */