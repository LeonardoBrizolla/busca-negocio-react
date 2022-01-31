import styled from 'styled-components';
import photo from '../../assets/images/coffee.png';
import { StarsStyle } from '../Stars/styles';

export const CardServiceStyles = styled.article`
  border: 5px solid #fffcee;
  border-radius: 14px;
  max-width: 288px;
  width: 100%;
  overflow: hidden;
  padding-bottom: var(--gap-smaller);

  & > ${StarsStyle} {
    margin: var(--gap-smaller) 0 var(--gap-smaller) var(--gap-smaller);
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
`;

export const Photo = styled.img.attrs({ src: photo, alt: 'Foto cafeteria' })`
  border-bottom: 2px solid #fffcee;
`;

export const Caption = styled.figcaption`
  color: #fffcee;
  font-size: 24px;
  text-transform: uppercase;

  background-color: #f25a70;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #fffcee;

  position: absolute;
  bottom: 2px;

  width: 100%;
`;

export const Title = styled.h2`
  color: #fffcee;
  font-size: 20px;
  letter-spacing: 0.15px;
  margin-left: var(--gap-smaller);
`;
