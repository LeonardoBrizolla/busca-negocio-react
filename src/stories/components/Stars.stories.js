import Stars from '../../components/Stars';

export default {
  title: 'components/Stars',
  component: Stars,
  parameters: {
    layout: 'centered',
  },
};

export function OneStar() {
  return <Stars amount="1" />;
}

export function TwoStar() {
  return <Stars amount="2" />;
}

export function ThreeStar() {
  return <Stars amount="3" />;
}

export function FourStar() {
  return <Stars amount="4" />;
}

export function FiveStar() {
  return <Stars amount="5" />;
}
