import { ButtonRed, InputText } from '@nursery/styles';

type SearcherProps = {
  isEnabled: boolean;
};

export const Searcher = ({ isEnabled }: SearcherProps) => (
  <div className='flex gap-1'>
    <InputText
      className='input border-nursery-dark max-sm:w-40'
      placeholder='Nombre Común'
      type='text'
    />
    <button
      className='button rounded'
      title='Buscar'
      disabled={!isEnabled}
      onClick={() => console.log('hacer click en buscar')}
    >
      <svg className='h-7 w-7 text-nursery-light p-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
      </svg>
    </button>
    <ButtonRed
      className='rounded'
      title='Borrar'
      disabled={!isEnabled}
      onClick={() => console.log('hiciste click en Borrar')}
    >
      <svg className='h-7 w-7 p-1' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' />
        <line x1='18' y1='9' x2='12' y2='15' />
        <line x1='12' y1='9' x2='18' y2='15' />
      </svg>
    </ButtonRed>
  </div>
);

/*
  <button
    className='button rounded'
    title='Imprimir'
    onClick={() => console.log('hiciste click en Imprimir')}
  >
    <svg className='h-7 w-7 text-nursery-light p-1' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <polyline points='6 9 6 2 18 2 18 9' />
      <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2' />
      <rect x='6' y='14' width='12' height='8' />
    </svg>
  </button>
 */