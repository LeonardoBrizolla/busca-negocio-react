import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgba(58, 64, 66, 0.4);
  padding: 8px var(--gap-small);

  & > ${IconFilter} {
    margin-right: var(--gap-small);
  }
`;

export const Label = styled.p`
  color: #fffcee;
  font-size: 20px;
`;
