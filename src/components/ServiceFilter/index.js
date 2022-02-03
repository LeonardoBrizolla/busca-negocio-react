import { useState } from 'react';
import IconFilter from '../IconFilter';
import { ServiceFilterStyle, Label } from './styles';
import MenuFilter from '../MenuFilter';
import IconClose from '../IconClose';

function ServiceFilter() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggleMenu = () => {
    setActiveMenu((old) => !old);
  };

  return (
    <>
      <ServiceFilterStyle onClick={handleToggleMenu}>
        <IconFilter />
        <IconClose />
        <Label>Guia de serviços</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} />
    </>
  );
}

export default ServiceFilter;
