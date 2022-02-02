import { useState } from 'react';
import IconFilter from '../IconFilter';
import { ServiceFilterStyle, Label } from './styles';
import MenuFilter from '../MenuFilter';

function ServiceFilter() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggleMenu = () => {
    setActiveMenu((old) => !old);
  };

  return (
    <>
      <ServiceFilterStyle onClick={handleToggleMenu}>
        <IconFilter />
        <Label>Guia de serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} />
    </>
  );
}

export default ServiceFilter;
