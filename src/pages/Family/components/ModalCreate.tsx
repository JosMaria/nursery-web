import { Modal } from '@nursery/components';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormType = {
  name: string;
};

type ModalCreateFamilyProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
  close: () => void;
};

export const ModalCreateFamily = ({ dialogRef, close }: ModalCreateFamilyProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>({
    defaultValues: { name: '' },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <Modal dialogRef={dialogRef}>
      <div className='bg-emerald-100 border-4 border-emerald-800 rounded max-w-sm md:max-w-lg w-full p-1 m-1'>
        <h1 className='font-semibold text-center text-lg md:text-xl'>Crear Familias</h1>
        <p className='text-sm p-1 leading-tight text-justify'>
          <b>Nota:</b> Puede crear mas de una familia haciendo click del boton '+' y si quiere
          lo quiere omitir haga click en 'x', la familia debe ser
          una palabra en minuculas y que no sea una familia ya existente
        </p>
        <form className='flex flex-col items-center gap-2 p-1' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col justify-center gap-0.5 max-w-xs w-full'>
            <div className='flex items-center gap-2'>
              <input
                className='flex-1 px-2 py-1 text-xs sm:text-sm rounded-sm focus:outline-none border-2 border-transparent focus:border-emerald-800'
                type='text'
                placeholder='nombre'
                autoComplete='off'
                {...register('name', {
                  pattern: { value: /^[a-z]+$/, message: 'Debe ser una palabra en minusculas' },
                  required: { value: true, message: 'No deje el campo de texto vacio' }
                })}
              />

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
            {<p className='text-xs rounded-full px-2 text-red-600 bg-red-100 font-medium w-fit'>{errors.name?.message}</p>}
          </div>
          <div className='flex justify-center gap-5'>
            <button
              className={`${!isValid && 'cursor-not-allowed'} bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm w-24 px-4 py-1 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85`}
              type='submit'
            >
              Crear
            </button>
            <button
              className='bg-emerald-800 text-emerald-50 max-sm:text-xs text-sm w-24 px-4 py-1 font-semibold tracking-wide rounded-sm hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 active:opacity-85'
              onClick={close}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
