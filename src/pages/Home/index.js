import HeaderMain from '../../components/HeaderMain';
import ServiceFilter from '../../components/ServiceFilter';
import Services from '../../components/Services';
import CardService from '../../components/CardService';
import ButtonFixed from '../../components/ButtonFixed';

function Home() {
  return (
    <>
      <HeaderMain />
      <ServiceFilter />
      <Services>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </Services>
      <ButtonFixed>Insira o seu negócio</ButtonFixed>
    </>
  );
}

export default Home;
