import { StatusType } from '@nursery/types/commons';
import { traduceStatus } from '@nursery/utils';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

type CardProps = {
  id: string;
  commonName: string;
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  photoUrl: string;
  status: StatusType;
};

export const Card = ({ commonName, scientificName, scientistLastnameInitial, family, status, photoUrl }: CardProps) => (
  <Link
    className='w-56 sm:w-60 md:w-72 xl:w-80 p-1 bg-[#abc994] shadow hover:shadow-md shadow-black hover:shadow-black focus:outline-none focus:shadow-md focus:shadow-black active:opacity-90'
    to='#'
  >
    <img className='h-40 sm:h-44 md:h-52 xl:h-60 w-full' src={photoUrl} alt={commonName} />
    <div className='flex flex-col p-1'>
      <Heading>{commonName}</Heading>
      <CurvedParagraph>{scientificName} <span className='capitalize'>{scientistLastnameInitial}</span></CurvedParagraph>
      <CurvedParagraph>{family}</CurvedParagraph>
      <p className='self-end text-xs bg-green-200 border border-green-700 rounded-full w-fit px-2'>{traduceStatus(status)}</p>
    </div>
  </Link>
);
