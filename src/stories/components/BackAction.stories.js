import BackAction from '../../components/BackAction';

export default {
  title: 'Components/BackAction',
  component: BackAction,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  const { content } = args;

  return <BackAction content={content} as="a" />;
}

export const Default = Template.bind({});

Default.args = {
  content: 'Voltar',
};
