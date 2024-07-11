import { SetURLSearchParams } from 'react-router-dom';

import { CLASSIFICATIONS } from '@nursery/constants/commons';
import { traduceClassification } from '@nursery/utils';

import { ButtonNavbar } from '../styles';
import { ClassificationType } from '@nursery/types/commons';

type NavbarProps = {
  classification: string;
  setSearchParams: SetURLSearchParams;
};

export const Navbar = ({ classification: classificationSelected, setSearchParams }: NavbarProps) => (
  <nav className='bg-nursery-light w-full sticky top-0 backdrop-blur-sm flex flex-wrap justify-evenly gap-1 select-none p-1'>
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
  </nav >
);
