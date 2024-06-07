import { Modal } from '@nursery/components';

type ModalUpdateFamilyProps = {
  familySelected: { id: string, name: string }
  dialogRef: React.RefObject<HTMLDialogElement>;
  close: () => void;
}

export const ModalUpdateFamily = ({ familySelected, dialogRef, close }: ModalUpdateFamilyProps) => (
  <Modal dialogRef={dialogRef}>
    <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-xs md:max-w-lg w-full max-sm:p-1 p-2 m-1'>
      <div className='flex justify-between items-start mb-1'>
        <h1 className='font-semibold text-center text-lg md:text-xl leading-tight'>Actualizar Familia</h1>
        <button
          className='flex items-center bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 text-red-50 px-1 py-0.5 leading-none text-sm rounded-sm'
          onClick={close}
        >
          <span>&#10007;</span>
        </button>
      </div>
      <div className='flex flex-col gap-1 text-sm p-1 leading-tight'>
        <p>Las plantas que fueron asignadas con esta familia se veran afectadas</p>
        <p>&bull; El nombre de la familia debe ser distinto al actual '<b>{familySelected.name}</b>'</p>
        <p>&bull; Debe por lo menos introducir un caracter</p>
        <p>&bull; Debe ser una palabra con letras min&uacute;sculas</p>
      </div>
      <div className='flex gap-3 py-2 px-1'>
        <input className='px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800' type='text' placeholder='nombre de la familia' />
        <button
          className='bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85 text-xs px-3 py-1 font-semibold tracking-wide rounded-sm'
          onClick={close}
        >
          Cambiar
        </button>
      </div>
    </div>
  </Modal>
);
