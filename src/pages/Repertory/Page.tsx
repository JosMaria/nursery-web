import { ItemList, Paused, Searcher } from './components';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@nursery/components';
import { fetchAllItems } from './service';
import { Title } from '@nursery/styles';
import { useRef } from 'react';

export const RepertoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: itemsObtained, status, isPaused } = useQuery({
    queryKey: ['items'],
    queryFn: fetchAllItems
  });

  const search = () => {
    if (inputRef.current) {
      const valueToSearch = inputRef.current.value;
      setSearchParams({ q: valueToSearch });
    }
  };

  const clean = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setSearchParams({ q: '' });
    }
  };

  if (isPaused) return <Paused />;

  return (
    <div className='flex justify-center m-1'>
      {status === 'pending' && <Loader />}
      {status === 'success' && (
        <section className='flex flex-col gap-1 max-w-3xl w-full'>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center'>
              <Title className='text-center'>Listado</Title>
              <button
                className='button rounded'
                title='Imprimir'
                onClick={() => console.log('hiciste click en Imprimir')}
              >
                <svg className='h-7 w-7 p-1 text-emerald-100' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <path d='M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2' />
                  <path d='M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4' />
                  <rect x='7' y='13' width='10' height='8' rx='2' />
                </svg>
              </button>
            </div>
            <Searcher
              isEnabled={itemsObtained.length > 0}
              inputRef={inputRef}
              text={searchParams.get('q') ?? ''}
              search={search}
              clean={clean}
            />
          </div>
          <ItemList
            itemsObtained={itemsObtained}
            textToFilter={searchParams.get('q') ?? ''}
          />
        </section>
      )}
      {status === 'error' && (<p>hubo un error</p>)}
    </div>
  );
}
