import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import PersonCard from './PersonCard';
import ProjectCard from './ProjectCard';
import SkillsList from './SkillsList';
import ThemeButton from './ThemeButton';

import projectimage from '../images/projectimage.PNG'

const OuterContainer = styled.div`
  text-align: center;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textcolor};
  transition: background ${props => props.theme.transitiontime};
`

const Container = styled.div`
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  text-align: left;
`

const ProjectContainer = styled.div`
  display: flex;
`

const Title = styled.h2`
`

const Paragraph = styled.p``

var theme = {
  background: "rgb(13,19,26)",
  altcolor: "rgb(30, 38, 47);",
  textcolor: "rgb(242, 245, 247)",
  oppositecolor: "rgb(255,255,255)",
  iconfill: "white",
  transitiontime: "0.5s"
}

const Page = () => {

  const [currentTheme, setCurrentTheme] = useState("dark");

  const swapTheme = () => {
    if (currentTheme === "light") {
      theme = {
        ...theme,
        background: "rgb(13,19,26)",
        altcolor: "rgb(30, 38, 47);",
        textcolor: "rgb(242, 245, 247)",
        iconfill: "white",
        oppositecolor: "rgb(255,255,255)"
      }
      setCurrentTheme("dark");
    }
    else if (currentTheme === "dark"){
      theme = {
        ...theme,
        background: "rgb(239, 241, 245)",
        altcolor: "rgb(250, 250, 250)",
        textcolor: "rgb(33, 35, 44)",
        iconfill: "black",
        oppositecolor: "rgb(13,19,26)"
      }
      setCurrentTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <Container>
          <ThemeButton onClick = {swapTheme}/>
          <PersonCard/>
          <Title>About me</Title>
          <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
          <Title>Projects</Title>
          <ProjectContainer>
            <ProjectCard image={projectimage} theme={currentTheme}/>
            <ProjectCard image={projectimage} theme={currentTheme}/>
          </ProjectContainer>
          <Title>Skills</Title>
          <SkillsList/>
          <Title>Certificates</Title>
        </Container>
      </OuterContainer>
    </ThemeProvider>
  );
}



export default Page;