import HeaderMain from '../../components/HeaderMain';
import BackAction from '../../components/BackAction';
import Stars from '../../components/Stars';
import Title from '../../components/Title';
import PhotoPreview from '../../components/PhotoPreview';
import DescriptionBox from '../../components/DescriptionBox';

function Details() {
  return (
    <>
      <HeaderMain />
      <BackAction />
      <Stars amount="5" />
      <Title>Cafeteria D Arte</Title>
      <PhotoPreview />
      <DescriptionBox>
        Aqui é só felicidade e café com um bom sol no verão e no inverno.
        gostosas sopas para deixar o seu dia mais quente e feliz. <br />
        Aqui o proprietário poderá escrever o que quiser sobre o seu café ;-)
      </DescriptionBox>
    </>
  );
}

export default Details;
