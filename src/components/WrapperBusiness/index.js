import WrapperBusinessStyle from './styles';

import Stars from '../Stars';
import Title from '../Title';
import PhotoPreview from '../PhotoPreview';
import DescriptionBox from '../DescriptionBox';

function WrapperBusiness() {
  return (
    <WrapperBusinessStyle>
      <Stars amount="5" />
      <Title>Cafeteria D Arte</Title>
      <PhotoPreview />
      <DescriptionBox>
        Aqui é só felicidade e café com um bom sol no verão e no inverno.
        gostosas sopas para deixar o seu dia mais quente e feliz. <br />
        Aqui o proprietário poderá escrever o que quiser sobre o seu café ;-)
      </DescriptionBox>
    </WrapperBusinessStyle>
  );
}

export default WrapperBusiness;
