import styled from 'styled-components';

export const ButtonText = styled.button`
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.25rem 1rem;
  font-weight: 500;
  border-radius: 0.125rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const ButtonYellow = styled.button`
  background-color: rgb(250 204 21 / 1);
  color: rgb(66 32 6 / 1);

  &:hover {
    background-color: rgb(234 179 8 / 1);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: rgb(234 179 8 / 1);
    box-shadow: 1px 1px #888;
  }

  &:active {
    opacity: 0.85;
  }
`;

export const ButtonRed = styled.button`
  background-color: rgb(220 38 38 / 1);
  color: rgb(254 242 242 / 1);

  &:hover {
    background-color: rgb(185 28 28 / 1);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: rgb(185 28 28 / 1);
    box-shadow: 1px 1px #888;
  }

  &:active {
    opacity: 0.85;
  }
`;
