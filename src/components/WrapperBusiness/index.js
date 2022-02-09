import WrapperBusinessStyle from './styles';

import Stars from '../Stars';
import Title from '../Title';
import PhotoPreview from '../PhotoPreview';
import DescriptionBox from '../DescriptionBox';

function WrapperBusiness({ stars, title, description }) {
  return (
    <WrapperBusinessStyle>
      <Stars amount={stars} />
      <Title>{title}</Title>
      <PhotoPreview />
      <DescriptionBox>{description}</DescriptionBox>
    </WrapperBusinessStyle>
  );
}

export default WrapperBusiness;
