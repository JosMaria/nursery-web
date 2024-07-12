import { SetURLSearchParams } from 'react-router-dom';

import { CLASSIFICATIONS } from '@nursery/constants/commons';
import { traduceClassification } from '@nursery/utils';

import { ButtonNavbar } from '../styles';
import { ClassificationType } from '@nursery/types/commons';
import { useRef, useState } from 'react';
import { ModalFilter } from './Modal';

type NavbarProps = {
  classification: string;
  setSearchParams: SetURLSearchParams;
};

export const Navbar = ({ classification: classificationSelected, setSearchParams }: NavbarProps) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const s = false;

  //return <p>Filtrado por: {classificationSelected}</p>


  return (
    <div className='w-full'>
      <button
        className='button py-1.5 px-4 m-2 rounded-full font-medium tracking-wide text-sm'
        onClick={() => modalRef.current && modalRef.current.show()}
      >
        Filtrar por
      </button>
      <ModalFilter dialogRef={modalRef} />
    </div >
  );

  return <>
    <nav className='bg-nursery-dark w-full sticky top-0 backdrop-blur-sm flex flex-wrap justify-evenly gap-1 select-none p-1'>
      <ButtonNavbar
        className={`border-nursery-dark ${!CLASSIFICATIONS.includes(classificationSelected as ClassificationType) ? 'bg-nursery-dark text-nursery-light' : 'bg-nursery-medium hover:bg-nursery-dark hover:text-nursery-light focus:bg-nursery-dark-hover focus:text-nursery-light active:opacity-90'}`}
        onClick={() => setSearchParams(prev => {
          prev.set('classification', '');
          prev.set('page', '0');
          return prev;
        })}
      >
        sin filtro
      </ButtonNavbar>
      {CLASSIFICATIONS.map((classification, index) => (
        <ButtonNavbar
          className={`border-nursery-dark ${classificationSelected === classification ? 'bg-nursery-dark text-nursery-light' : 'bg-nursery-medium hover:bg-nursery-dark hover:text-nursery-light focus:bg-nursery-dark-hover focus:text-nursery-light active:opacity-90'}`}
          key={index}
          onClick={() => setSearchParams(prev => {
            prev.set('classification', classification);
            prev.set('page', '0');
            return prev;
          })}
        >
          {traduceClassification(classification)}
        </ButtonNavbar>))}
    </nav >
  </>
};
