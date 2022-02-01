import { Content, Check } from './styles';

function Checkbox({ id }) {
  return (
    <>
      <Check id={id} />
      <Content htmlFor={id}>Alimentação</Content>
    </>
  );
}

export default Checkbox;
