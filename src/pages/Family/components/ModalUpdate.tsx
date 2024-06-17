import { ButtonRed, ButtonText, InputText, TextFormValidation, Title } from '@nursery/styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFamilyNameByID } from '../services';
import { Sending } from '@nursery/components';
import { useForm } from 'react-hook-form';

type ModalUpdateFamilyProps = {
  familySelected: { id: string, name: string };
  close: () => void;
}

export const ModalUpdateFamily = ({ familySelected, close }: ModalUpdateFamilyProps) => {
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

  const closeModal = () => {
    reset();
    close();
  };

  return (
    <div className='bg-nursery-medium border-4 border-nursery-dark rounded max-w-xs md:max-w-md w-full p-1 m-1'>
      <header className='flex justify-between'>
        <Title>Actualizar Familia</Title>
        <ButtonRed className='self-start p-1 leading-none text-xs font-bold' onClick={closeModal}>
          &#10005;
        </ButtonRed>
      </header>
      <div className='text-xs sm:text-sm p-1 leading-tight text-justify'>
        <p>Las plantas que fueron asignadas con esta familia se veran afectadas</p>
        <p>&bull; El nombre de la familia debe ser distinto al actual '<b>{familySelected.name}</b>'</p>
        <p>&bull; Debe ser una palabra con letras min&uacute;sculas</p>
      </div>
      <form
        className='flex justify-center gap-3 p-1'
        onSubmit={handleSubmit(({ name }) => updateFamilyMutation({ id: familySelected.id, name }))}
      >
        <section className='flex flex-col gap-0.5'>
          <div className='flex items-baseline flex-wrap gap-1'>
            <fieldset className='flex flex-col gap-0.5'>
              <InputText
                className='input max-w-64 w-full'
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
              <TextFormValidation>{errors.name?.message}</TextFormValidation>
            </fieldset>
            {isPending ? <Sending /> : <ButtonText className='button' type='submit'>Cambiar</ButtonText>}
          </div>
        </section>
      </form>
    </div>
  );
};
