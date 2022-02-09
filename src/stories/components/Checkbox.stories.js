import Checkbox from '../../components/Checkbox';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <Checkbox {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  id: 'alimentacao',
  label: 'Alimentação',
};
