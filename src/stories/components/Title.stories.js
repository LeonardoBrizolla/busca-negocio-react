import Title from '../../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <Title {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Cafeteria D Arte',
};
