import { Modal } from '@nursery/components';

type ModalCreateFamilyProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  close: () => void;
};

export const ModalCreateFamily = ({ dialogRef, close }: ModalCreateFamilyProps) => (
  <Modal dialogRef={dialogRef}>
    <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-sm md:max-w-lg w-full p-1 m-1'>
      <h1 className='font-semibold text-center text-lg md:text-xl'>Crear Familias</h1>
      <p className='text-sm p-1 leading-tight text-justify'>
        <b>Nota:</b> Puede crear mas de una familia haciendo click del boton '+' y si quiere
        lo quiere omitir haga click en 'x', la familia debe ser de
        una palabra en minuculas y que no sea una familia ya existente
      </p>

      <div className='flex flex-col gap-3 p-2'>
        <div className='flex justify-center items-center gap-2'>
          <input className='px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800' type='text' placeholder='nombre' />
          <button
            className='bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85 leading-none px-2 py-0.5 text-xl font-bold rounded-sm'
          >
            +
          </button>
          <button
            className='bg-red-500 text-red-50 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 leading-none px-2 py-1 font-bold rounded-sm'
          >
            x
          </button>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <input className='px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800' type='text' placeholder='nombre' />
          <button
            className='bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85 leading-none px-2 py-0.5 text-xl font-bold rounded-sm'
          >
            +
          </button>
          <button
            className='bg-red-500 text-red-50 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 leading-none px-2 py-1 font-bold rounded-sm'
          >
            x
          </button>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <input className='px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800' type='text' placeholder='nombre' />
          <button
            className='bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85 leading-none px-2 py-0.5 text-xl font-bold rounded-sm'
          >
            +
          </button>
          <button
            className='bg-red-500 text-red-50 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 leading-none px-2 py-1 font-extrabold rounded-sm'
          >
            x
          </button>
        </div>
      </div>
      <div className='flex justify-center gap-5 p-1'>
        <button
          className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm w-20 px-3 py-1 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
          onClick={close}
        >
          Crear
        </button>
        <button
          className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm w-20 px-3 py-1 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
          onClick={close}
        >
          Cancelar
        </button>
      </div>
    </div>
  </Modal>
);