import { ButtonRed, ButtonYellow } from '@nursery/styles'

type FamilyListProps = {
  families: AnswerFamilyType[];
  openModal: (modalType: ModalType) => void;
};

export const FamilyList = ({ families, openModal }: FamilyListProps) => (
  <>
    {families.length === 0 ? (
      <p className='text-center font-medium max-sm:text-sm p-3 bg-nursery-medium w-full border-nursery-dark border-2'>
        No se encontro ninguna familia registrada
      </p>
    ) : (
      <div className='flex flex-col gap-2 w-full p-2 bg-nursery-medium'>
        {families.map(family => (
          <article className='flex justify-between items-center py-1 px-3 bg-nursery-light' key={family.id}>
            <p className='font-medium text-sm italic'>{family.name}</p>
            <div className='flex gap-2 text-lg'>
              <ButtonYellow
                className='px-1 py-0.5 leading-none rounded-sm'
                onClick={() => openModal({ type: 'update', familySelected: { id: family.id, name: family.name } })}
              >
                <span>&#9998;</span>
              </ButtonYellow>
              <ButtonRed 
                className='px-1 py-0.5 leading-none rounded-sm' 
                onClick={() => openModal({ type: 'delete', familySelected: { id: family.id, name: family.name } })}
              >
                <span>&#10007;</span>
              </ButtonRed>
            </div>
          </article>
        ))}
      </div>
    )}
  </>
);
