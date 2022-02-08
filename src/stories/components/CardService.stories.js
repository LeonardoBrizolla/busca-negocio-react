import CardService from '../../components/CardService';

export default {
  title: 'components/CardService',
  component: CardService,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <CardService {...args} />;
}

export const Featured = Template.bind({});
Featured.args = {
  featuredContent: 'Em destaque',
  featured: true,
  name: 'Cafeteria D Arte',
  stars: '5',
};

export const NoFeatured = Template.bind({});
NoFeatured.args = {
  featuredContent: 'Em destaque',
  featured: false,
  name: 'Cafeteria D Arte',
  stars: '5',
};
