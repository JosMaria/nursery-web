import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StatusType } from '@nursery/types/commons';
import { traduceStatus } from '@nursery/utils';

import ImageNotFound from '../../../assets/plant-not-found.png';

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
  plantId: number;
  commonName: string;
  scientificName?: string;
  imageId?: string;
  status: StatusType;
};

export const Card = ({ plantId, commonName, scientificName, status, imageId }: CardProps) => (
  <Link
    className='bg-orange-100 max-w-sm w-full flex flex-col p-2 hover:shadow-md hover:shadow-black focus:outline-none focus:shadow-md focus:shadow-black'
    to='#'
  >
    <div className='overflow-hidden w-full rounded-lg'>
      <img
        className='h-52 md:h-11 xl:h-80'
        src={imageId ? `http://localhost:8080/api/v2/plants/${plantId}/image/${imageId}` : ImageNotFound}
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
