import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  font-size: 16px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;

  color: ${props => props.color};
  background-color: ${props => props.$background};

  ${props =>
    props.$primary &&
    css`
      color: white;
      background-color: #d74521;
    `}
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
