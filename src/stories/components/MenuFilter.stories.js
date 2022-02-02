import MenuFilter from '../../components/MenuFilter';

export default {
  title: 'components/MenuFilter',
  component: MenuFilter,
};

function Template(args) {
  const { active } = args;
  return <MenuFilter active={active} />;
}

export const Open = Template.bind({});
Open.args = {
  active: true,
};

export const Close = Template.bind({});
Close.args = {
  active: false,
};
