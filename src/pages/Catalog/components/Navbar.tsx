import { CLASSIFICATIONS } from '@nursery/constants/commons';
import { traduceClassification } from '@nursery/utils';

export const Navbar = () => (
  <nav className="bg-nursery-light w-full sticky top-0 backdrop-blur-sm flex flex-wrap justify-evenly gap-1 select-none p-1">
    {CLASSIFICATIONS.map((classification, index) => (
      <button className='bg-nursery-medium border-2 border-nursery-dark rounded-sm font-medium text-xs md:text-sm px-2 p-0.5 w-24 md:w-28 tracking-wide hover:bg-nursery-dark hover:text-nursery-light focus:outline-none focus:bg-nursery-dark-hover focus:text-nursery-light active:opacity-90' key={index}>
        {traduceClassification(classification)}
      </button>))}
    <button className='bg-nursery-medium border-2 border-nursery-dark rounded-sm font-medium text-xs md:text-sm px-2 p-0.5 w-24 md:w-28 tracking-wide hover:bg-nursery-dark hover:text-nursery-light focus:outline-none focus:bg-nursery-dark-hover focus:text-nursery-light active:opacity-90'>
      sin filtro
    </button>
  </nav>
);
