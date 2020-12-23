import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  padding-bottom: 70px;
`

const SubjectContainer = styled.div`
`;

const SubjectTitle = styled.h3`
  margin: 10px;
`;

const ElementContainer = styled.div`
  padding-left: 20px;
  display: inline-flex;
  flex-wrap: wrap;
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
      {props.text.map((skill, i) => (
        <SubjectContainer key={i}>
          <SubjectTitle>{skill.title}</SubjectTitle>
          <ElementContainer>
            {skill.elements.map((element, j) => (
              <SubjectElement key={j}>{element}</SubjectElement>
            ))}
          </ElementContainer>
        </SubjectContainer>
      ))}
    </Container>
  );
}

export default SkillsList;