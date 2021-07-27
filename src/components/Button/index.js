import styled, { css } from 'styled-components';

const Button = styled.button`
  align-self: center;
  border-radius: 25px;
  text-decoration: none;
  font-family: 'Roboto';
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 11px 15px;
  cursor: pointer;
  max-height: 50px;

  ${props =>
    props.primary &&
    css`
      border: 2px solid #35ff69;
      background-color: #35ff69;
      color: #00091a;
      &:hover {
        border: 2px solid #f5f5f5;
        background-color: #f5f5f5;
      }
    `}

  ${props =>
    props.secondary &&
    css`
      border: 2px solid #f5f5f5;
      background-color: transparent;
      color: #f5f5f5;
      &:hover {
        color: #35ff69;
        border: 2px solid #35ff69;
      }
    `}
`;

export default Button;
