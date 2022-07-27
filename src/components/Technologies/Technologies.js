import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "rech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technalogies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the weDev world. From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
          <ListContainer>
            <ListTitle>Fron-End</ListTitle>
            <ListParagraph>Experience with <br/>
            React.js, Djanog</ListParagraph>
          </ListContainer>
        
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>Experience with <br/>
            Databases</ListParagraph>
          </ListContainer>
        
      </ListItem>
      <ListItem>
        <DiZend size = "3rem"/>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Experience with <br/>
            Figma</ListParagraph>
          </ListContainer>
        
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
