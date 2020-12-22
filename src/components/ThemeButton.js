import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;

  width: 1px;
  height: 1px;
  margin: 10px 5px;
  padding: 20px;
  background: ${props => props.theme.oppositecolor};
  border-radius: 999px;
  border: 0px solid white;
  transition: padding 0.2s, margin 0.2s, background ${props => props.theme.transitiontime};

  :hover {
    padding: 25px;
    margin: 5px 0px;
    cursor: pointer;
  }
`;

const ThemeButton = (props) => {
  return (
    <Button onClick={props.onClick}/>
  );
}

export default ThemeButton;