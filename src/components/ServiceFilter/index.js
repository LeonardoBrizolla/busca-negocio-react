import { useState } from 'react';
import IconFilter from '../IconFilter';
import { ServiceFilterStyle, Label } from './styles';
import MenuFilter from '../MenuFilter';
import IconClose from '../IconClose';

function ServiceFilter({ content, items }) {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggleMenu = () => {
    setActiveMenu((old) => !old);
  };

  return (
    <>
      <ServiceFilterStyle active={activeMenu} onClick={handleToggleMenu}>
        <IconFilter />
        <IconClose />
        <Label>{content}</Label>
      </ServiceFilterStyle>
      <MenuFilter active={activeMenu} items={items} />
    </>
  );
}

export default ServiceFilter;
