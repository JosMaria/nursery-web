import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ButtonRed, ButtonText, Title } from '@nursery/styles';
import { Sending } from '@nursery/components';
import { deleteFamilyByID } from '../../services';

type ModalDeleteProps = {
  familySelected: { id: string, name: string };
  close: () => void;
}

export const ModalDelete = ({ familySelected, close }: ModalDeleteProps) => {
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

  return (
    <div className='flex flex-col bg-nursery-medium border-4 border-nursery-dark rounded max-w-xs md:max-w-md w-full p-1 m-1'>
      <header className='flex justify-between'>
        <Title>Eliminar Familiar</Title>
        <ButtonRed className='self-start p-1 leading-none text-xs font-bold' onClick={close}>
          &#10005;
        </ButtonRed>
      </header>
      <p className='text-xs sm:text-sm p-1 leading-tight text-justify'>
        Al momento de eliminar la familia '<b>{familySelected.name}</b>'
        las plantas que fueron asignadas con esta familia se veran afectadas
      </p>
      {isPending ? <Sending /> : (
        <ButtonText className='button self-center' onClick={() => deleteFamilyByIDMutate(familySelected.id)}>
          Si, Eliminar
        </ButtonText>
      )}
    </div>
  );
};
