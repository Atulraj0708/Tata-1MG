// Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.styles.bg || '#ff6f61'};
  color: ${(props) => props.styles.color || '#ffffff'};
  border: none;
  border-radius: ${(props) => props.styles.br || '3px'};
  width: ${(props) => props.styles.width || '140px'};
  height: ${(props) => props.styles.height || '100%'};
  font-size: ${(props) => props.styles.fontSize || '16px'};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e55b50; /* Slightly darker shade on hover */
  }
`;

const Button = ({ styles }) => {
  return <StyledButton styles={styles}>QUICK ORDER</StyledButton>;
};

export default Button;
