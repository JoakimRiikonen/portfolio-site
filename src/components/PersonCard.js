import React from 'react';
import styled from 'styled-components';
import face from '../images/face.png';

import cv_en from '../resumes/CV_en.pdf';
import cv_fi from '../resumes/CV_fi.pdf';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`

const TextContainer = styled.div`
  text-align: center;
`

const FaceImage = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    padding-top: 2q0px;
  }
`

const Name = styled.h2`
  font-size: 50px;
  padding: 0px 45px;
  margin: 25px 0 0 0;
`

const ContactInfoContainer = styled.div`
  padding: 0 60px;
  padding-bottom: 20px;
  font-weight: bold;
`

const Email = styled.span`
  padding: 0 10px;
`

const Icon = styled.span`
  padding: 10px 5px;
`

const Link = styled.a`
  text-decoration: none;
  padding: 0px 10px;
  color: ${props => props.theme.textcolor}
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
      <FaceImage src={face} alt="my face" title="I need a better picture of myself"/>
      <TextContainer>
        <Name>Joakim Riikonen</Name>
        <ContactInfoContainer>
        <Link href="https://github.com/JoakimRiikonen" target="_blank">
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill={props.theme === "dark" ? "white" : "black"} viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </Icon>
          Github
        </Link>
        |
        <Email>joariikonen@gmail.com</Email>
          
        </ContactInfoContainer>
        <Resume href={props.currentLanguage === "fi" ? cv_fi : cv_en} target="_blank">CV</Resume>
      </TextContainer>
    </Container>
  );
}

export default PersonCard;
