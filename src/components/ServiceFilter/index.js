import IconFilter from '../IconFilter';
import { ServiceFilterStyle, Label } from './styles';
import MenuFilter from '../MenuFilter';

function ServiceFilter() {
  return (
    <>
      <ServiceFilterStyle>
        <IconFilter />
        <Label>Guia de serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active />
    </>
  );
}

export default ServiceFilter;
