import { Loader, Paused } from '@nursery/components';
import { useQuery } from '@tanstack/react-query';

import { Content } from './components';
import { fetchAllItems } from './service';

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
      {status === 'success' && <Content itemsObtained={itemsObtained} />}
    </div>
  );
}
