import ServiceFilter from '../../components/ServiceFilter';

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
  title: 'components/ServiceFilter',
  component: ServiceFilter,
};

function Template(args) {
  return <ServiceFilter {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  content: 'Guia de serviços',
  items,
};
