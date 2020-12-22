import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import PersonCard from './PersonCard';
import ProjectCard from './ProjectCard';
import SkillsList from './SkillsList';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';

import text_en from "../text/text_en.json";
import text_fi from "../text/text_fi.json";

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
  const [activeText, setActiveText] = useState(text_en);

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

  const swapLanguage = () => {
    if (activeText.language === "en"){
      setActiveText(text_fi);
    }
    else if (activeText.language === "fi"){
      setActiveText(text_en);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <Container>
          <ThemeButton onClick={swapTheme}/>
          <LanguageButton onClick={swapLanguage} currentLanguage={activeText.language}/>
          <PersonCard/>
          <Title>{activeText.titles.aboutme}</Title>
          <Paragraph>{activeText.aboutme}</Paragraph>
          <Title>{activeText.titles.projects}</Title>
          <ProjectContainer>
            <ProjectCard
              image={projectimage}
              text={activeText.projects[0]}
              githubLink="aaaa"
              liveappLink="alive"
              theme={currentTheme}
            />
            <ProjectCard
              image={projectimage}
              text={activeText.projects[1]}
              githubLink="bbbb"
              liveappLink="blive"
              theme={currentTheme}
            />
          </ProjectContainer>
          <Title>{activeText.titles.skills}</Title>
          <SkillsList text={activeText.skills}/>
          <Title>{activeText.titles.certificates}</Title>
        </Container>
      </OuterContainer>
    </ThemeProvider>
  );
}



export default Page;