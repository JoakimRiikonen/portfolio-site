import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 0;
  padding: 0 20px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.textcolor};
  font-size: 20px;
  border: 0px solid white;
  transition: padding 0.2s, margin 0.2s, background ${props => props.theme.transitiontime};

  :hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  ${({ active }) => active && `
    border-bottom: 4px solid;
    border-color: ${props => props.theme.textcolor}
  `}
`;

const LanguageButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Text active={props.currentLanguage === "fi"}>FI</Text> / <Text active={props.currentLanguage === "en"}>EN</Text>
    </Button>
  );
}

export default LanguageButton;