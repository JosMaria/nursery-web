import { InputText, Title } from '@nursery/styles';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@nursery/components';
import { fetchAllItems } from './service';
import { Table } from './components';

export const RepertoryPage = () => {
  const { data: items, isPending, isError, isSuccess } = useQuery({
    queryKey: ['items'],
    queryFn: fetchAllItems
  });

  return (
    <div className='w-full p-1 flex justify-center'>
      <section className='flex flex-col gap-2 max-w-3xl w-full select-none py-1'>
        <div className='flex flex-wrap justify-between'>
          <Title>Listado</Title>
          <div className='flex items-center gap-1'>
            <InputText className='input border-nursery-dark max-sm:w-40' placeholder='Nombre Común' />
            <button 
              className='button rounded' 
              title='Buscar' 
              disabled={!isSuccess || items.length === 0} 
              onClick={() => console.log('hiciste click en Buscar')}
            >
              <svg className='h-7 w-7 text-nursery-light p-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
            <button 
              className='button rounded' 
              title='Imprimir' 
              disabled={!isSuccess || items.length === 0} 
              onClick={() => console.log('hiciste click en Imprimir')}
            >
              <svg className='h-7 w-7 text-nursery-light p-1' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='6 9 6 2 18 2 18 9' />
                <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
                <rect x='6' y='14' width='12' height='8' />
              </svg>
            </button>
          </div>
        </div>
        {isPending && <div className='flex justify-center p-2'><Loader /></div>}
        {isError && <p>Hubo un error</p>}
        {isSuccess && (items.length === 0 ? (
          <p className='max-sm:text-sm w-full text-center font-medium p-2 sm:p-3 bg-nursery-medium border-2 border-nursery-dark'>
            Actualmente no tenemos ejemplares de plantas para mostrar en este momento. Por favor, vuelve a intentarlo m&aacute;s tarde.
          </p>) : 
          <Table items={items} />
        )}
      </section>
    </div>
  );
}
