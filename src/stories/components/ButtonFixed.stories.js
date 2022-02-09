import ButtonFixed from '../../components/ButtonFixed';

export default {
  title: 'components/ButtonFixed',
  component: ButtonFixed,
};

function Template(args) {
  return <ButtonFixed {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  children: 'Insira o seu negócio',
};
