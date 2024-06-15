import { ButtonRed, ButtonYellow } from '@nursery/styles';

type ItemProps = {
  id: string;
  name: string;
  openModalToDelete: () => void;
  openModalToUpdate: () => void;
}
export const Item = ({ name, openModalToDelete, openModalToUpdate }: ItemProps) => (
  <div className='flex justify-between items-center py-1 px-3 bg-emerald-50'>
    <p className='font-medium text-sm italic'>{name}</p>
    <div className='flex gap-2 text-lg'>
      <ButtonYellow className='px-1 py-0.5 leading-none rounded-sm' onClick={openModalToUpdate}>
        <span>&#9998;</span>
      </ButtonYellow>
      <ButtonRed className='px-1 py-0.5 leading-none rounded-sm' onClick={openModalToDelete}>
        <span>&#10007;</span>
      </ButtonRed>
    </div>
  </div>
);
