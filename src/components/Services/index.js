import ServicesStyles from './styles';
import CardService from '../CardService';

function Services({ listServices }) {
  return (
    <ServicesStyles>
      {listServices.map((props) => (
        <CardService {...props} />
      ))}
    </ServicesStyles>
  );
}

export default Services;
