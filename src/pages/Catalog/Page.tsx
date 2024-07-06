import { Loader, Paused } from '@nursery/components';
import { useQuery } from '@tanstack/react-query';

import { Content } from './components';
import { fetchPlantCards } from './service';

export const CatalogPage = () => {
  const { data: plantCardsObtained, status, isPaused } = useQuery({
    queryKey: ['cards'],
    queryFn: fetchPlantCards
  });

  if (isPaused) return <Paused />;

  return (
    <div className='flex justify-center m-1'>
      {status === 'pending' && <Loader />}
      {status === 'error' && (<p>hubo un error</p>)}
      {status === 'success' && <Content plantCards={plantCardsObtained} />}
    </div>
  );
};
