import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) and (min-width: 321px) {
      ${props}
      
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 641px) and (max-width: 768px) {
      ${props}
    
    }
  `;
};