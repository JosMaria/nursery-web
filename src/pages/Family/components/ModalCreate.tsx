import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFieldArray, useForm } from 'react-hook-form';
import { Modal } from '@nursery/components';
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

  const buttons = (
    <div className='flex justify-center gap-5'>
      <button
        className='flex items-center justify-center gap-2 text-sm w-28 px-2 py-1 font-semibold tracking-wide rounded-sm bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
        disabled={isPending}
        type='submit'
      >
        {isPending ?
          <>
            <p>Cargando</p>
            <div className='w-3 h-3 animate-spin rounded-full border-2 border-x-emerald-800' />
          </> :
          'Crear'
        }
      </button>
      <button
        className='text-sm w-28 px-2 py-1 font-semibold tracking-wide rounded-sm bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
        type='reset'
        onClick={close}
      >
        Cancelar
      </button>
    </div>
  );

  return (
    <Modal dialogRef={dialogRef}>
      <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-sm md:max-w-lg w-full p-1 m-1'>
        <h1 className='font-semibold text-center text-lg md:text-xl'>Crear Familias</h1>
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
                  <input
                    className='px-2 py-1 w-64 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800'
                    type='text'
                    placeholder='nombre'
                    autoComplete='off'
                    autoCorrect='off'
                    {...register(`families.${index}.name` as const, {
                      pattern: { value: /^[a-z]+$/, message: 'Debe ser una palabra en minusculas' },
                      required: { value: true, message: 'No deje el campo de texto vacio' }
                    })}
                  />
                  {index !== 0 && (
                    <button
                      className='bg-red-500 text-red-50 hover:bg-red-600 focus:outline-none focus:bg-red-600 active:opacity-85 leading-none px-2 py-1 font-bold rounded-sm'
                      type='button'
                      onClick={() => remove(index)}
                    >
                      x
                    </button>
                  )}
                </div>
                <p className='text-xs rounded px-1 text-red-500 font-semibold w-fit'>{errors.families?.[index]?.name?.message}</p>
              </fieldset>
            ))}
            <button
              className='self-start bg-emerald-800 text-emerald-50 hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85 leading-none px-6 py-1.5 font-semibold text-sm rounded-sm'
              type='button'
              onClick={() => append({ name: '' })}
            >
              +1 Familia
            </button>
          </section>
          {buttons}
        </form>
      </div >
    </Modal >
  );
}
