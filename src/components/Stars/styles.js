import styled from 'styled-components';
import icon from '../../assets/images/star.png';

export const StarsStyle = styled.ol`
  display: flex;
`;

export const Star = styled.li``;

export const Icon = styled.img.attrs({
  src: icon,
  alt: 'Ícone amarelo de uma estrela',
})``;
