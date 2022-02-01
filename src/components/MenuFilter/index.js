import MenuFilterStyle from './styles';
import Checkbox from '../Checkbox';

function MenuFilter() {
  return (
    <MenuFilterStyle>
      <Checkbox id="alimentacao" label="Alimentação" />
      <Checkbox id="animais" label="Animais" />
      <Checkbox id="arteecultura" label="Arte e Cultura" />
      <Checkbox id="associacoeseentidades" label="Associações / Entidades" />
      <Checkbox id="audioevideo" label="Áudio e Vídeo" />
      <Checkbox id="automoveis" label="Automóveis" />
      <Checkbox id="bancos" label="Bancos" />
      <Checkbox id="baresebebidas" label="Bares e Bebidas" />
      <Checkbox id="belezaeestetica" label="Beleza e Estética" />
      <Checkbox id="cafes" label="Cafés" />
      <Checkbox id="criancaebebe" label="Criança e Bebê" />
      <Checkbox id="diversaoelazer" label="Diversão e Lazer" />
      <Checkbox id="escritorioeseguranca" label="Escritório e Segurança" />
      <Checkbox id="esporteefitness" label="Esporte e Fitness" />
      <Checkbox id="fastfoods" label="Fast Foods" />
      <Checkbox id="festaseeventos" label="Festas e Eventos" />
      <Checkbox id="lojasecomercios" label="Lojas e comércios" />
      <Checkbox id="medicinaesaude" label="Medicina e Saúde" />
      <Checkbox id="tecnologiaeinformatica" label="Tecnologia e Informática" />
      <Checkbox id="utilidadepublica" label="Utilidade Pública" />
    </MenuFilterStyle>
  );
}

export default MenuFilter;
