import styled from 'styled-components';
import LogoMain from '../LogoMain';
import IconSearch from '../IconSearch';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #3a5166;
  padding: var(--gap-small) var(--gap-small) 28px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
