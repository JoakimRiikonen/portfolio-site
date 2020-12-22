import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 15px;
  padding: 20px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.textcolor};
  font-size: 20px;
  border-radius: 40px;
  border: 0px solid white;
  transition: padding 0.2s, margin 0.2s, background ${props => props.theme.transitiontime};

  :hover {
    padding: 25px;
    margin: 10px;
    cursor: pointer;
  }
`;

const FiText = styled.span`
  ${({ active }) => active && `
    border-bottom: 4px solid;
    border-color: ${props => props.theme.textcolor}
  `}
`;

const EnText = styled.span`
  border-bottom: 4px solid;
  border-color: ${props => props.theme.textcolor}
`;

const LanguageButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <FiText active={props.currentLanguage === "fi"}>FI</FiText> / <FiText active={props.currentLanguage === "en"}>EN</FiText>
    </Button>
  );
}

export default LanguageButton;