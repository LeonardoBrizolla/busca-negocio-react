import styled from 'styled-components';
import { StarsStyle } from '../Stars/styles';
import Title from '../Title';
import PhotoPreview from '../PhotoPreview';
import DescriptionBox from '../DescriptionBox';

const WrapperBusinessStyle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  & > ${StarsStyle} {
    margin-bottom: 5px;
  }

  & > ${Title} {
    margin-bottom: 15px;
  }

  & > ${PhotoPreview} {
    margin-bottom: 20px;
    width: 100%;
  }

  & > ${DescriptionBox} {
    width: 100%;
  }
`;

export default WrapperBusinessStyle;
