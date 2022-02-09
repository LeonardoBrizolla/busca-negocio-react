import { CardServiceStyles, Photo, Figure, Caption, Title } from './styles';
import Stars from '../Stars';

function CardService({ featured, name, stars, featuredContent }) {
  return (
    <CardServiceStyles>
      <Figure>
        <Photo />
        <Caption active={featured}>{featuredContent}</Caption>
      </Figure>

      <Stars amount={stars} />
      <Title>{name}</Title>
    </CardServiceStyles>
  );
}

export default CardService;
