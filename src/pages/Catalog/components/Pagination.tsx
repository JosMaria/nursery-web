export const Pagination = () => (
  <footer className='flex items-center gap-3 sm:gap-5 font-bold m-2'>
    <button className='button sm:p-0.5 rounded'>
      <svg
        className='h-6 w-6 sm:h-7 sm:w-7 max-sm:p-0.5 text-nursery-light'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='11 17 6 12 11 7' />
        <polyline points='18 17 13 12 18 7' />
      </svg>
    </button>
    <button className='button sm:p-0.5 rounded'>
      <svg
        className='h-6 w-6 sm:h-7 sm:w-7 text-nursery-light p-0.5'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />
        <polyline points='15 6 9 12 15 18' />
      </svg>
    </button>
    <p className='font-medium max-sm:text-sm tracking-wide'>P&aacute;gina 1</p>
    <button className='button sm:p-0.5 rounded'>
      <svg
        className='h-6 w-6 sm:h-7 sm:w-7 text-nursery-light p-0.5'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />
        <polyline points='9 6 15 12 9 18' />
      </svg>
    </button>
    <button className='button sm:p-0.5 rounded'>
      <svg
        className='h-6 w-6 sm:h-7 sm:w-7 max-sm:p-0.5 text-nursery-light'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polyline points='13 17 18 12 13 7' />
        <polyline points='6 17 11 12 6 7' />
      </svg>
    </button>
  </footer>
);
