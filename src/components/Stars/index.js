import { useEffect, useState } from 'react';
import { StarsStyle, Star, Icon } from './styles';

function Stars({ amount }) {
  const [amountStars, setAmountStars] = useState(['']);

  useEffect(() => {
    setAmountStars(new Array(+amount).fill(''));
  }, []);

  return (
    <StarsStyle>
      {amountStars.map(() => (
        <Star>
          <Icon />
        </Star>
      ))}
    </StarsStyle>
  );
}

export default Stars;
