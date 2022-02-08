import DescriptionBox from '../../components/DescriptionBox';

export default {
  title: 'components/DescriptionBox',
  component: DescriptionBox,
  parameters: {
    layout: 'centered',
  },
};

export function Default() {
  return (
    <DescriptionBox>
      Aqui é só felicidade e café com um bom sol no verão e no inverno. gostosas
      sopas para deixar o seu dia mais quente e feliz. <br />
      Aqui o proprietário poderá escrever o que quiser sobre o seu café ;-)
    </DescriptionBox>
  );
}
