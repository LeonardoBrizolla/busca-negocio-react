import { Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain';
import BackAction from '../../components/BackAction';
import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction content="Voltar" as={Link} />
      <WrapperBusiness
        stars="5"
        title="Café do Zé"
        description="The best coffee of the World!"
      />
    </>
  );
}

export default Details;
