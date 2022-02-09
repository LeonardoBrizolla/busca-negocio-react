import Services from '../../components/Services';

const listServices = [
  {
    featuredContent: 'Em destaque',
    featured: true,
    name: 'Cafeteria D Arte',
    stars: '4',
  },
  {
    featuredContent: 'Em destaque',
    featured: false,
    name: 'Cafeteria Maria',
    stars: '5',
  },
  {
    featuredContent: 'Em destaque',
    featured: false,
    name: 'Cafeteria Leo',
    stars: '5',
  },
];

export default {
  title: 'components/Services',
  component: Services,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <Services {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  listServices,
};
