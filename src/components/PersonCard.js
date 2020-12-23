import React from 'react';
import styled from 'styled-components';
import tempface from '../images/tempface.png';

import cv_en from '../resumes/CV_en.pdf';
import cv_fi from '../resumes/CV_fi.pdf';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
`

const TextContainer = styled.div`
`

const FaceImage = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
`

const Name = styled.h2`
  font-size: 50px;
  padding: 0px 45px;
  margin: 30px 0;
`

const Resume = styled.a`
  background: ${props => props.theme.altcolor};
  color: ${props => props.theme.textcolor};
  margin: 45px;
  padding: 10px 35px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;

  transition: background 0.2s;

  :hover {
    background: orange;
    cursor: pointer;
  }
`


const PersonCard = (props) => {
  return (
    <Container>
      <FaceImage src={tempface} alt="my face"/>
      <TextContainer>
        <Name>Joakim Riikonen</Name>
        <Resume href={props.currentLanguage === "fi" ? cv_fi : cv_en} target="_blank">CV</Resume>
      </TextContainer>
    </Container>
  );
}

export default PersonCard;
