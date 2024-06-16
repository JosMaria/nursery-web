import { ButtonRed, ButtonText, TextFormValidation, Title, InputText } from '@nursery/styles';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFieldArray, useForm } from 'react-hook-form';
import { Modal, Sending } from '@nursery/components';
import { postFamilies } from '../services';

type FormValuesType = {
  families: { name: string; }[];
};

type ModalCreateFamilyProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  close: () => void;
};

export const ModalCreateFamily = ({ dialogRef, close }: ModalCreateFamilyProps) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValuesType>({
    defaultValues: {
      families: [{ name: '' }]
    },
    mode: 'onBlur',
  });

  const { fields, remove, append } = useFieldArray<FormValuesType>({
    control,
    name: 'families',
  });

  const { mutate: createFamilyMutate, isPending } = useMutation({
    mutationFn: postFamilies,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['families'] });
      reset();
      close();
    },
    onError: () => {
      console.log('error request');
    },
  });

  const closeModal = () => {
    reset();
    close();
  }

  return (
    <Modal dialogRef={dialogRef}>
      <div className='bg-nursery-medium border-4 border-nursery-dark rounded max-w-sm md:max-w-lg w-full p-1 m-1'>
        <header className='flex justify-between'>
          <Title>Crear Familias</Title>
          <ButtonRed className='self-start p-1 leading-none text-xs font-bold' onClick={closeModal}>
            &#10005;
          </ButtonRed>
        </header>
        <p className='text-sm p-1 leading-tight text-justify'>
          <b>Nota:</b> Puede crear mas de una familia haciendo click del boton '+' y si quiere
          lo quiere omitir haga click en 'x', la familia debe ser
          una palabra en minuculas y que no sea una familia ya existente
        </p>
        <form className='flex flex-col items-center gap-2 p-1' onSubmit={handleSubmit(formData => createFamilyMutate(formData.families))}>
          <section className='flex flex-col justify-center gap-2 max-w-xs w-full p-2'>
            {fields.map((field, index) => (
              <fieldset className='flex flex-col gap-0.5' key={field.id}>
                <div className='flex items-center gap-2'>
                  <InputText
                    className='input w-60'
                    type='text'
                    placeholder='nombre'
                    autoComplete='off'
                    autoCorrect='off'
                    {...register(`families.${index}.name` as const, {
                      pattern: { value: /^[a-z]+$/, message: 'Debe ser una palabra en minusculas' },
                      required: { value: true, message: 'No deje el campo de texto vacio' }
                    })}
                  />
                  {index !== 0 &&
                    <ButtonRed className='p-1 leading-none text-xs font-bold' type='button' onClick={() => remove(index)}>
                      &#10005;
                    </ButtonRed>
                  }
                </div>
                <TextFormValidation>{errors.families?.[index]?.name?.message}</TextFormValidation>
              </fieldset>
            ))}
            <ButtonText className='button self-start' type='button' onClick={() => append({ name: '' })}>
              +1 Familia
            </ButtonText>
          </section>
          {isPending ? <Sending /> : <ButtonText className='button' type='submit'>Crear Familias</ButtonText>}
        </form>
      </div >
    </Modal >
  );
};
