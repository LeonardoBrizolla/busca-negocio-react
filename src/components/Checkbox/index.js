import { Content, Check } from './styles';

function Checkbox({ id, label }) {
  return (
    <>
      <Check id={id} />
      <Content htmlFor={id}>{label}</Content>
    </>
  );
}

export default Checkbox;
