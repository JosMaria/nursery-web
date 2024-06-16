export const ButtonPending = () => (
  <div className='flex justify-center items-center gap-2 py-1 px-4 rounded-sm hover:cursor-progress'>
    <p className='text-xs sm:text-sm font-medium'>Procesando</p>
    <div className='w-3 h-3 animate-spin rounded-full border-2 border-x-nursery-dark' />
  </div>
);
