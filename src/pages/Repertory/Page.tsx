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
        <section className='flex flex-col gap-1 max-w-2xl w-full'>
          <div className='flex flex-wrap justify-between'>
            <Title>Listado</Title>
            <Searcher
              isEnabled={itemsObtained.length > 0}
              inputRef={inputRef}
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
