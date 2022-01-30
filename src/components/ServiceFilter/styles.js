import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  background-color: #3a4042;

  & > ${IconFilter} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', sans-serif;
  color: #fffcee;
  font-size: 20px;
`;
