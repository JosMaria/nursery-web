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
  scientificName: string;
  scientistLastnameInitial: string;
  family: string;
  photoUrl: string;
  status: StatusType;
};

export const Card = ({ commonName, scientificName, scientistLastnameInitial, family, status, photoUrl }: CardProps) => (
  <Link
    className='w-56 sm:w-60 md:w-72 xl:w-80 p-1 bg-[#ccd5ae] shadow hover:shadow-md shadow-black hover:shadow-black focus:outline-none focus:shadow-md focus:shadow-black active:opacity-90'
    to='#'
  >
    <img className='h-40 sm:h-44 md:h-52 xl:h-60 w-full' src={photoUrl} alt={commonName} />
    <div className='flex flex-col p-1 select-none'>
      <Heading>{commonName}</Heading>
      <CurvedParagraph>{scientificName} <span className='capitalize'>{scientistLastnameInitial}</span></CurvedParagraph>
      <CurvedParagraph>{family}</CurvedParagraph>
      <StatusParagraph className='self-end'>{traduceStatus(status)}</StatusParagraph>
    </div>
  </Link>
);
