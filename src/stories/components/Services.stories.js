import Services from '../../components/Services';
import CardService from '../../components/CardService';

export default {
  title: 'components/Services',
  component: Services,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return (
    <Services>
      <CardService />
      <CardService />
      <CardService />
      <CardService />
    </Services>
  );
}
