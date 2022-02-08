import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconArrow from '../IconArrow';

const BackActionStyle = styled(Link)`
  display: flex;
  align-items: center;
  color: #fffcee;
  font-size: 24px;
  text-decoration: none;
  padding: 0 0 25px 16px;

  & > ${IconArrow} {
    margin-right: 10px;
  }
`;

export default BackActionStyle;
