import styled from 'styled-components';

export const Content = styled.label`
  display: flex;
  align-items: center;
  color: #fffcee;
  font-size: 20px;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid #fffcee;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const Check = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + ${Content}:before {
    background-color: #f25a70;
  }
`;
