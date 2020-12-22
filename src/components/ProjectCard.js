import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.altcolor};
  width: 450px;
  margin: 10px 20px;
  border-radius: 10px;
  transition: background-color ${props => props.theme.transitiontime}
`

const Image = styled.img`
  width: 450px;
  height: 200px;
  border-radius: 10px 10px 0 0;
`
const Title = styled.h3`
  margin: 5px 10px;
  font-size: 30px;
`

const Description = styled.p`
  margin: 5px 10px;
`

const TagContainer = styled.div`
  padding: 0px 10px 0 10px;
  display: flex;
`

const Tag = styled.span`
  padding: 2px 5px;
  margin: 4px;
  background-color: orange;
  border-radius: 3px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0px 10px 10px 0px;
`

const Icon = styled.span`
  padding: 0px 5px;
`

const Link = styled.a`
  text-decoration: none;
  padding: 3px 10px;
  color: ${props => props.theme.textcolor}
`

const ProjectCard = (props) => {
  return (
    <Container>
      <Image src={props.image} alt="project image"/>
      <Title>Sample title</Title>
      <Description>Description description description</Description>
      <TagContainer>
        <Tag>Tag1</Tag>
        <Tag>Second</Tag>
      </TagContainer>
      <LinkContainer>
        <Link href="#">
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill={props.theme === "dark" ? "white" : "black"} viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </Icon>
          Github
        </Link>
        <Link href="#">
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill={props.theme === "dark" ? "white" : "black"} viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 00-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 004.666 5.5 11.13 11.13 0 01-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 01-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 01-.857-1.215A9.637 9.637 0 015.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 011.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0110.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 004.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 00-.353-.552 6.506 6.506 0 014.666 5.5zM8 0a8 8 0 100 16A8 8 0 008 0z">
              </path>
            </svg>
          </Icon>
          App
        </Link>
      </LinkContainer>
    </Container>
  );
}

export default ProjectCard;
