import MenuFilter from '../../components/MenuFilter';

const items = [
  { id: 'alimentacao', label: 'Alimentação' },
  { id: 'animais', label: 'Animais' },
  { id: 'arteecultura', label: 'Arte e Cultura' },
  { id: 'associacoeseentidades', label: 'Associações / Entidades' },
  { id: 'audioevideo', label: 'Áudio e Vídeo' },
  { id: 'automoveis', label: 'Automóveis' },
  { id: 'bancos', label: 'Bancos' },
  { id: 'baresebebidas', label: 'Bares e Bebidas' },
  { id: 'belezaeestetica', label: 'Beleza e Estética' },
  { id: 'cafes', label: 'Cafés' },
  { id: 'criancaebebe', label: 'Criança e Bebê' },
  { id: 'diversaoelazer', label: 'Diversão e Lazer' },
  { id: 'escritorioeseguranca', label: 'Escritório e Segurança' },
  { id: 'esporteefitness', label: 'Esporte e Fitness' },
  { id: 'fastfoods', label: 'Fast Foods' },
  { id: 'festaseeventos', label: 'Festas e Eventos' },
  { id: 'lojasecomercios', label: 'Lojas e comércios' },
  { id: 'medicinaesaude', label: 'Medicina e Saúde' },
  { id: 'tecnologiaeinformatica', label: 'Tecnologia e Informática' },
  { id: 'utilidadepublica', label: 'Utilidade Pública' },
];

export default {
  title: 'components/MenuFilter',
  component: MenuFilter,
};

function Template(args) {
  const { active } = args;
  return <MenuFilter active={active} />;
}

export const Open = Template.bind({});
Open.args = {
  active: true,
  items,
};

export const Close = Template.bind({});
Close.args = {
  active: false,
  items,
};
