import HeaderMain from '../../components/HeaderMain';
import LogoMain from '../../components/LogoMain';
import IconSearch from '../../components/IconSearch';

export default {
  title: 'components/HeaderMain',
  component: HeaderMain,
};

export function Default() {
  return (
    <HeaderMain>
      <LogoMain />
      <IconSearch />
    </HeaderMain>
  );
}
