import { useHistory } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain';
import BackAction from '../../components/BackAction';
import WrapperBusiness from '../../components/WrapperBusiness';

function Details() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <HeaderMain />
      <BackAction content="Voltar" as="a" onClick={handleClick} />
      <WrapperBusiness
        stars="5"
        title="Café do Zé"
        description="The best coffee of the World!"
      />
    </>
  );
}

export default Details;
