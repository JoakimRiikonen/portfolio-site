import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 70px;
`

const SubjectContainer = styled.div`
`;

const SubjectTitle = styled.h3`
`;

const ElementContainer = styled.div`
  padding-left: 20px;
`;

const SubjectElement = styled.span`
  border: 1px solid ${props => props.theme.textcolor};
  border-radius: 20px;
  padding: 5px 10px;
  margin: 3px;
`;

const SkillsList = (props) => {

  return (
    <Container>
      {props.text.map((skill) => (
        <SubjectContainer>
          <SubjectTitle>{skill.title}</SubjectTitle>
          <ElementContainer>
            {skill.elements.map((element) => (
              <SubjectElement>{element}</SubjectElement>
            ))}
          </ElementContainer>
        </SubjectContainer>
      ))}
    </Container>
  );
}

export default SkillsList;