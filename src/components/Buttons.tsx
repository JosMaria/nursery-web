export const ButtonPending = () => (
  <div className='flex items-center gap-1.5 bg-emerald-800 text-emerald-50 px-3 py-1 hover:cursor-progress'>
    <p className='text-xs sm:text-sm font-medium'>Cargando</p>
    <div className='w-3 h-3 animate-spin rounded-full border-2 border-x-emerald-800' />
  </div>
);
