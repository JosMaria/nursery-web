import styled from 'styled-components';

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
  background-color: rgb(239 68 68 / 1);
  color: rgb(254 242 242 / 1);

  &:hover {
    background-color: rgb(220 38 38 / 1);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: rgb(220 38 38 / 1);
    box-shadow: 1px 1px #888;
  }

  &:active {
    opacity: 0.85;
  }
`;
