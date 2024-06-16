import { ButtonRed, ButtonYellow } from '@nursery/styles'

type FamilyListProps = {
  families: AnswerFamilyType[];
  openModalToDeleteFamily: (id: string, name: string) => void;
}

export const FamilyList = ({ families, openModalToDeleteFamily }: FamilyListProps) => (
  <div className='flex flex-col gap-2 w-full p-2 bg-nursery-medium'>
    {families.map(family => (
      <article className='flex justify-between items-center py-1 px-3 bg-nursery-light' key={family.id}>
        <p className='font-medium text-sm italic'>{family.name}</p>
        <div className='flex gap-2 text-lg'>
          <ButtonYellow className='px-1 py-0.5 leading-none rounded-sm' onClick={() => console.log('abrir update')}>
            <span>&#9998;</span>
          </ButtonYellow>
          <ButtonRed className='px-1 py-0.5 leading-none rounded-sm' onClick={() => openModalToDeleteFamily(family.id, family.name)}>
            <span>&#10007;</span>
          </ButtonRed>
        </div>
      </article>
    ))}
  </div>
);
