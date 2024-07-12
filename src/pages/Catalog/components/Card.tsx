import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StatusType } from '@nursery/types/commons';
import { traduceStatus } from '@nursery/utils';

const CurvedParagraph = styled.i`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  
  &::first-letter {
    text-transform: capitalize;
  };

  @media (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  };
`;

const Heading = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  &::first-letter {
    text-transform: capitalize;
  };

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  };

  @media (min-width: 1280px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  };
`;

const StatusParagraph = styled.p`
  background-color: rgb(231 229 228);
  border-color: rgb(120 113 108);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  border-width: 2px;
  border-radius: 9999px;
  width: fit-content;
  padding: 0 0.5rem;
  letter-spacing: 0.025em;
`;

type CardProps = {
  id: string;
  commonName: string;
  scientificName?: string;
  family: string;
  photoUrl: string;
  status: StatusType;
};

export const Card = ({ commonName, scientificName, status }: CardProps) => (
  <Link
    className='max-w-md w-full flex flex-col p-2 hover:shadow-md hover:shadow-black focus:outline-none focus:shadow-md focus:shadow-black'
    to='#'
  >
    <div className='overflow-hidden w-full rounded-lg'>
      <img
        className='h-52 md:h-72 xl:h-80'
        src={'https://media.gettyimages.com/id/1280154279/es/foto/dale-a-tu-hogar-una-buena-dosis-de-vegetaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=8XgCKb18LL4zb4m19uila63AOD9jwsE8KTlSenQzPDc='}
        alt={commonName}
      />
    </div>
    <div className='flex flex-wrap items-center justify-between gap-2 px-1'>
      <div className='flex flex-col select-none'>
        <p className='font-bold'>{commonName}</p>
        <p className='text-sm italic'>{scientificName ? scientificName : <>&laquo;Sin Nombre Cientifico&raquo;</>}</p>
      </div>
      <StatusParagraph>{traduceStatus(status)}</StatusParagraph>
    </div>
  </Link>
);
