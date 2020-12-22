import React from 'react';
import styled from 'styled-components';

import PersonCard from './PersonCard';
import ProjectCard from './ProjectCard';
import SkillsList from './SkillsList';

import projectimage from '../images/projectimage.PNG'

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

const Page = () => {
  return (
    <Container>
      <PersonCard/>
      <Title>About me</Title>
      <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
      <Title>Projects</Title>
      <ProjectContainer>
        <ProjectCard image={projectimage}/>
        <ProjectCard image={projectimage}/>
      </ProjectContainer>
      <Title>Skills</Title>
      <SkillsList/>
      <Title>Certificates</Title>
    </Container>
  );
}

const setTheme = (themeName) => {
  if (themeName === "dark") {

  }
  else if (themeName === "light"){

  }
}

export default Page;