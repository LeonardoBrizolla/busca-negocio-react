import { Link } from 'react-router-dom';
import { CardServiceStyles, Photo, Figure, Caption, Title } from './styles';
import Stars from '../Stars';

function CardService({ featured, name, stars, featuredContent }) {
  return (
    <CardServiceStyles>
      <Link to="/details">
        <Figure>
          <Photo />
          <Caption active={featured}>{featuredContent}</Caption>
        </Figure>

        <Stars amount={stars} />
        <Title>{name}</Title>
      </Link>
    </CardServiceStyles>
  );
}

export default CardService;
