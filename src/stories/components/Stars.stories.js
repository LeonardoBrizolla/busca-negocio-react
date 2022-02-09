import Stars from '../../components/Stars';

export default {
  title: 'components/Stars',
  component: Stars,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <Stars {...args} />;
}

export const OneStar = Template.bind({});
OneStar.args = {
  amount: '1',
};

export const TwoStar = Template.bind({});
TwoStar.args = {
  amount: '2',
};

export const ThreeStar = Template.bind({});
ThreeStar.args = {
  amount: '3',
};

export const FourStar = Template.bind({});
FourStar.args = {
  amount: '4',
};

export const FiveStar = Template.bind({});
FiveStar.args = {
  amount: '5',
};
