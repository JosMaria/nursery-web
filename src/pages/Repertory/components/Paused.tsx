export const Paused = () => (
  <section className='flex justify-center'>
    <div className='flex flex-col items-center gap-2 m-1 p-3 bg-nursery-medium border-2 border-nursery-dark max-w-md w-full'>
      <svg
        className='h-10 w-10 text-black'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <line x1='1' y1='1' x2='23' y2='23' />
        <path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55' />
        <path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39' />
        <path d='M10.71 5.05A16 16 0 0 1 22.58 9' />
        <path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88' />
        <path d='M8.53 16.11a6 6 0 0 1 6.95 0' />
        <line x1='12' y1='20' x2='12.01' y2='20' />
      </svg>
      <p className='text-justify max-sm:text-sm select-none leading-snug'>
        No se puedo cargar la p&aacute;gina. Por favor, aseg&uacute;rate
        de estar conectado y vuelve a intentar. Para mejorar la experiencia,
        verifica tu conexi&oacute;n a Internet o intenta conectarte a una
        red m&aacute;s r&aacute;pida.
      </p>
    </div>
  </section>
);
