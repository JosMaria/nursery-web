import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.40rem;
  line-height: 2rem;
  font-weight: 600;

  @media not all and (min-width: 640px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const TextFormValidation = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(239 68 68);
  font-weight: 600;
  padding: 0 0.1rem;
  width: fit-content;
`;
