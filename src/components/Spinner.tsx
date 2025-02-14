export const Loader = () => (
  <div className='flex flex-col items-center gap-1 w-fit p-2'>
    <div className='w-10 h-10 animate-spin rounded-full border-4 border-y-black border-x-transparent' />
    <p className='text-sm font-medium'>Cargando</p>
  </div>
);

export const Sending = () => (
  <div className='flex justify-center items-center gap-2 py-1 px-4 rounded-sm hover:cursor-progress'>
    <p className='text-xs sm:text-sm font-medium'>Procesando</p>
    <div className='w-3 h-3 animate-spin rounded-full border-2 border-x-nursery-dark' />
  </div>
);
