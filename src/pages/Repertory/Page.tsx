import { Loader } from '@nursery/components';
import { useQuery } from '@tanstack/react-query';

import { Content, ItemListPDF, Paused } from './components';
import { fetchAllItems } from './service';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

export const RepertoryPage = () => {
  const { data: itemsObtained, status, isPaused } = useQuery({
    queryKey: ['items'],
    queryFn: fetchAllItems
  });

  if (isPaused) return <Paused />;

  return (
    <div className='flex justify-center m-1'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>hubo un error</p>)}
      {status === 'success' && (
        <>
          <PDFDownloadLink document={<ItemListPDF />} fileName='Listado de Plantas.pdf'>
            {({ loading }) => loading ? (<p>Cargando...</p>) : (<button>Descargarlo ahora</button>)}
          </PDFDownloadLink>
          <PDFViewer width={1000} height={1000} >
            <ItemListPDF />
          </PDFViewer>
        </>
      )}
    </div>
  );
}

/**<Content itemsObtained={itemsObtained} /> */