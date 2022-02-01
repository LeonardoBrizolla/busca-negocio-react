import CardService from '../../components/CardService';

export default {
  title: 'components/CardService',
  component: CardService,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return <CardService />;
}
