import Checkbox from '../../components/Checkbox';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return <Checkbox id="alimentacao" label="Alimentação" />;
}
