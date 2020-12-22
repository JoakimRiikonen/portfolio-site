import React from 'react';
import styled from 'styled-components';
import tempface from '../images/tempface.png';

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
  font-size: 40px;
  padding: 0px 45px;
`

const Role = styled.h3`
  font-size: 30px;
`

const PersonCard = () => {
  return (
    <Container>
      <FaceImage src={tempface} alt="my face"/>
      <TextContainer>
        <Name>Joakim Riikonen</Name>
        <Role>Junior Full-stack developer</Role>
      </TextContainer>
    </Container>
  );
}

export default PersonCard;
