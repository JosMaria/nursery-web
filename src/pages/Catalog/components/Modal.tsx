import { useState } from 'react';

import { CLASSIFICATIONS } from '@nursery/constants/commons';
import { ButtonRed, ButtonText, Title } from '@nursery/styles';
import { ClassificationType } from '@nursery/types/commons';
import { traduceClassification } from '@nursery/utils';

type ModalProps = {
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export const ModalFilter = ({ dialogRef }: ModalProps) => {
  const [filterSelected, setFilterSelected] = useState<ClassificationType | null>(null);

  const close = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const isSelected = (classification: ClassificationType) => filterSelected ? filterSelected === classification : false;

  return (
    <dialog className='fixed inset-0 min-w-full min-h-full backdrop-blur bg-black bg-opacity-50' ref={dialogRef} open>
      <div className='flex justify-center items-center h-screen select-none'>
        <div className='flex flex-col gap-1 bg-nursery-light p-1 max-w-lg w-full border-2 border-nursery-dark m-1'>
          <div className='flex justify-between items-start'>
            <Title>Filtrar por Clasificaci&oacute;n</Title>
            <ButtonRed onClick={close}>
              <svg className='h-4 w-4 p-0.5 font-bold rounded' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </ButtonRed>
          </div>
          <p className='text-xs sm:text-sm'>
            Seleccione 1 clasificaci&oacute;n para ser mostrada en el cat&aacute;logo
          </p>
          <article className='flex flex-wrap justify-center gap-2 text-xs m-1'>
            {CLASSIFICATIONS.map((classification, index) => (
              <button
                className={`${isSelected(classification) ? 'bg-nursery-dark text-nursery-light' : 'bg-nursery-medium'} py-0.5 px-3 rounded border-2 border-nursery-dark`}
                key={index}
                onClick={() => setFilterSelected(prev => prev && (prev !== classification ? classification : null))}
              >
                {traduceClassification(classification)}
              </button>
            ))}
          </article>
          <ButtonText className='button self-end mt-1' onClick={() => console.log(filterSelected)}>
            Filtrar
          </ButtonText>
        </div>
      </div>
    </dialog>
  );
};
