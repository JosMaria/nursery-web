import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFamilyByID } from '../services';
import { Modal } from '@nursery/components';

type ModalDeleteFamilyProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  familySelected: { id: string, name: string };
  close: () => void;
}

export const ModalDeleteFamily = ({ familySelected, dialogRef, close }: ModalDeleteFamilyProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteFamilyByIDMutate, isPending } = useMutation({
    mutationFn: deleteFamilyByID,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      close();
    },
    onError: () => {
      console.log('error request');
    },
  });

  const handleClickDeleteButton = () => {
    deleteFamilyByIDMutate(familySelected.id);
    close();
  };

  return (
    <Modal dialogRef={dialogRef}>
      <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-xs md:max-w-md w-full p-1 m-1'>
        <h1 className='font-semibold text-center text-lg md:text-xl'>Eliminar Familia</h1>
        <p className='text-sm md:text-base px-1 md:px-3 py-1 text-justify leading-tight'>
          Al momento de eliminar la familia '<b>{familySelected.name}</b>' las plantas que fueron asignadas con esta familia se veran afectadas
        </p>
        <div className='flex justify-center gap-5 p-1 mt-1'>
          <button
            className='bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 text-red-50 px-4 py-1.5 leading-none text-sm font-semibold rounded-sm'
            onClick={handleClickDeleteButton}
          >
            {isPending ?
              <>
                <p>Cargando</p>
                <div className='w-3 h-3 animate-spin rounded-full border-2 border-x-red-500' />
              </> :
              'Eliminar'
            }
          </button>
          <button
            className='bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85  text-red-50 px-4 py-1.5 leading-none text-sm font-semibold rounded-sm'
            onClick={close}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}
