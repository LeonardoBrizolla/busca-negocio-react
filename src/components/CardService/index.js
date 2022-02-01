import { CardServiceStyles, Photo, Figure, Caption, Title } from './styles';
import Stars from '../Stars';

function CardService() {
  return (
    <CardServiceStyles>
      <Figure>
        <Photo />
        <Caption>Em destaque</Caption>
      </Figure>

      <Stars amount="5" />
      <Title>Cafeteria D Arte</Title>
    </CardServiceStyles>
  );
}

export default CardService;
