import Title from '../../components/Title';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return <Title>Cafeteria D Arte</Title>;
}
