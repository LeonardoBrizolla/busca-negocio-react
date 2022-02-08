import styled from 'styled-components';
import photo from '../../assets/images/photo.png';

const PhotoPreview = styled.img.attrs({
  src: photo,
  alt: 'Foto de pré-visualização',
})`
  border-radius: 14px;
  border: 2px solid #fffcee;
  box-sizing: border-box;
`;

export default PhotoPreview;
