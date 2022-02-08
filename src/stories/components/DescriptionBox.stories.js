import DescriptionBox from '../../components/DescriptionBox';

export default {
  title: 'components/DescriptionBox',
  component: DescriptionBox,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <DescriptionBox {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  children:
    'Aqui é só felicidade e café com um bom sol no verão e no inverno. gostosas sopas para deixar o seu dia mais quente e feliz. Aqui o proprietário poderá escrever o que quiser sobre o seu café ;-)',
};
