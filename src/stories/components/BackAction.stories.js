import BackAction from '../../components/BackAction';
import IconArrow from '../../components/IconArrow';

export default {
  title: 'Components/BackAction',
  component: BackAction,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return (
    <BackAction as="a">
      <IconArrow />
    </BackAction>
  );
}
