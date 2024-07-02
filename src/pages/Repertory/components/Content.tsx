import { useSearchParams } from 'react-router-dom';
import { Title } from '@nursery/styles';
import { Searcher } from './Searcher';
import { ItemList } from './ItemList';
import { useRef } from 'react';

type ContentProps = {
  itemsObtained: AnswerItemType[]
}

export const Content = ({ itemsObtained }: ContentProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  const itemsFiltered = itemsObtained.filter(item => item.commonName.toLowerCase().includes((searchParams.get('q') ?? '').toLowerCase()));

  const handleSearcher = (action: SearcherActionType) => {
    if (inputRef.current) {
      if (action === 'search') {
        setSearchParams({ q: inputRef.current.value });
      
      } else if (action === 'clean') {
        inputRef.current.value = '';
        setSearchParams({ q: '' });
      }
    }
  };

  return (
    <section className='flex flex-col gap-1 max-w-3xl w-full'>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <Title className='text-center'>Listado</Title>
          <button
            className='button rounded'
            title='Imprimir'
            onClick={() => console.log('size', itemsFiltered.length)}
          >
            <svg className='h-7 w-7 p-1 text-nursery-light' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
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
          handleSearcher={handleSearcher}
        />
      </div>
      <ItemList
        itemsFiltered={itemsFiltered}
        textToFilter={searchParams.get('q') ?? ''}
        existsPlants={itemsObtained.length > 0}
      />
    </section>
  );
}
