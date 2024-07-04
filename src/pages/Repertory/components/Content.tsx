import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Title } from '@nursery/styles';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { ButtonDownloadPDF } from './ButtonDownloadPDF';
import { ItemList } from './ItemList';
import { ItemListPDF } from './ItemListPDF';
import { Searcher } from './Searcher';

type ContentProps = {
  itemsObtained: AnswerItemType[]
};

export const Content = ({ itemsObtained }: ContentProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ q: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  const itemsFiltered = itemsObtained.filter(item => item.commonName.toLowerCase().includes((searchParams.get('q') ?? '').toLowerCase()));

  const handleSearcher = (action: SearcherActionType) => {
    if (inputRef.current) {
      let valueToSearch = '';

      if (action === 'clean') {
        inputRef.current.value = valueToSearch;

      } else if (action === 'search') {
        valueToSearch = inputRef.current.value;
      }
      setSearchParams({ q: valueToSearch }, { replace: true });
    }
  };

  return (
    <section className='flex flex-col gap-1 max-w-3xl w-full'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-start'>
          <Title className='text-center'>Listado</Title>
          <PDFDownloadLink document={<ItemListPDF itemsFiltered={itemsFiltered} />} fileName='Listado de Plantas.pdf'>
            {({ loading }) => loading ? <ButtonDownloadPDF isEnabled={false} /> : <ButtonDownloadPDF isEnabled />}
          </PDFDownloadLink>
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
