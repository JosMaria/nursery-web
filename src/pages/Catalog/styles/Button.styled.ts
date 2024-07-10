import styled from 'styled-components';

type ButtonNavbarProps = {
  isActive?: boolean;
};

export const ButtonNavbar = styled.button<ButtonNavbarProps>`
  border-width: 2px;
  border-radius: 0.125rem;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.125rem 0.5rem;
  width: 6rem;
  letter-spacing: 0.025em;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  };

  @media (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 7rem;
  }
`;
