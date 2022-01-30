import HeaderMain from './components/HeaderMain';
import LogoMain from './components/LogoMain';
import IconSearch from './components/IconSearch';
import IconFilter from './components/IconFilter';
import { ServiceFilter, Label } from './components/ServiceFilter';

function App() {
  return (
    <>
      <HeaderMain>
        <LogoMain />
        <IconSearch />
      </HeaderMain>

      <ServiceFilter>
        <IconFilter />

        <Label>Guia de serviços</Label>
      </ServiceFilter>
    </>
  );
}

export default App;
