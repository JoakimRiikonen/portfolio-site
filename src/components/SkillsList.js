import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`

const SubjectContainer = styled.div`
`;

const SubjectTitle = styled.h3`
`;

const ElementContainer = styled.div`
  padding-left: 20px;
`;

const SubjectElement = styled.span`
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 3px;
`;

const SkillsList = () => {
  return (
    <Container>
      <SubjectContainer>
        <SubjectTitle>Programming Languages</SubjectTitle>
        <ElementContainer>
          <SubjectElement>JavaScript</SubjectElement>
          <SubjectElement>Python</SubjectElement>
          <SubjectElement>Java</SubjectElement>
        </ElementContainer>
      </SubjectContainer>

      <SubjectContainer>
        <SubjectTitle>Web development</SubjectTitle>
        <ElementContainer>
          <SubjectElement>React</SubjectElement>
          <SubjectElement>Django</SubjectElement>
          <SubjectElement>Express</SubjectElement>
          <SubjectElement>Node.js</SubjectElement>
          <SubjectElement>HTML</SubjectElement>
          <SubjectElement>CSS</SubjectElement>
        </ElementContainer>
      </SubjectContainer>

      <SubjectContainer>
        <SubjectTitle>Databases</SubjectTitle>
        <ElementContainer>
          <SubjectElement>MySQL</SubjectElement>
          <SubjectElement>PostgreSQL</SubjectElement>
          <SubjectElement>MongoDB</SubjectElement>
        </ElementContainer>
      </SubjectContainer>

      <SubjectContainer>
        <SubjectTitle>Data Science and AI</SubjectTitle>
        <ElementContainer>
          <SubjectElement>Tensorflow</SubjectElement>
          <SubjectElement>Keras</SubjectElement>
          <SubjectElement>NumPy</SubjectElement>
          <SubjectElement>Pandas</SubjectElement>
          <SubjectElement>Matplotlib</SubjectElement>
        </ElementContainer>
      </SubjectContainer>
    </Container>
  );
}

export default SkillsList;