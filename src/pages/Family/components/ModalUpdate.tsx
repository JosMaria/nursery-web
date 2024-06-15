import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Modal, ButtonPending } from '@nursery/components';
import { updateFamilyNameByID } from '../services';
import { ButtonRed } from '@nursery/styles';
import { useForm } from 'react-hook-form';

type ModalUpdateFamilyProps = {
  familySelected: { id: string, name: string };
  dialogRef: React.RefObject<HTMLDialogElement>;
  close: () => void;
}

export const ModalUpdateFamily = ({ familySelected, dialogRef, close }: ModalUpdateFamilyProps) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<{ name: string }>();

  const { mutate: updateFamilyMutation, isPending } = useMutation({
    mutationFn: (data: { id: string, name: string }) => updateFamilyNameByID(data.id, data.name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      reset();
      close();
    },
    onError: () => {
      console.log('error request update');
    },
  });

  return (
    <Modal dialogRef={dialogRef}>
      <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-xs md:max-w-lg w-full p-1 m-1'>
        <div className='flex justify-between items-start mb-1'>
          <h1 className='font-semibold text-center text-lg md:text-xl leading-tight'>Actualizar Familia</h1>
          <ButtonRed
            className='px-1 py-0.5 leading-none text-sm font-semibold'
            onClick={close}
          >
            &#10005;
          </ButtonRed>
        </div>
        <div className='flex flex-col gap-1 text-sm p-1 leading-tight'>
          <p>Las plantas que fueron asignadas con esta familia se veran afectadas</p>
          <p>&bull; El nombre de la familia debe ser distinto al actual '<b>{familySelected.name}</b>'</p>
          <p>&bull; Debe por lo menos introducir un caracter</p>
          <p>&bull; Debe ser una palabra con letras min&uacute;sculas</p>
        </div>
        <form
          className='flex justify-center gap-3 py-2 px-1'
          onSubmit={handleSubmit(({ name }) => updateFamilyMutation({ id: familySelected.id, name }))}
        >
          <section className='flex flex-col gap-0.5'>
            <div className='flex items-baseline flex-wrap gap-1'>
              <div className='flex flex-col gap-0.5'>
                <input
                  className='w-60 px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800'
                  type='text'
                  placeholder='nombre de la familia'
                  autoComplete='off'
                  autoCorrect='off'
                  {...register('name', {
                    pattern: { value: /^[a-z]+$/, message: 'Debe ser una palabra en minusculas' },
                    required: { value: true, message: 'No deje el campo de texto vacio' },
                    validate: value => value !== familySelected.name || 'Tiene que introducir un nombre distinto'
                  })}
                />
                <p className='px-0.5 text-xs rounded text-red-500 font-semibold w-fit'>{errors.name?.message}</p>
              </div>
              {!isPending ? <ButtonPending /> : (
                <button
                  className='flex items-center justify-center gap-2 max-sm:text-xs text-sm px-4 py-1 font-semibold tracking-wide rounded-sm bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
                  type='submit'
                >
                  Cambiar
                </button>
              )}
            </div>
          </section>
        </form>
      </div>
    </Modal>
  );
}
