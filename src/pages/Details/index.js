import HeaderMain from '../../components/HeaderMain';
import BackAction from '../../components/BackAction';
import Stars from '../../components/Stars';
import Title from '../../components/Title';
import PhotoPreview from '../../components/PhotoPreview';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction />
      <Stars amount="5" />
      <Title>Cafeteria D Arte</Title>
      <PhotoPreview />
    </>
  );
}

export default Details;
