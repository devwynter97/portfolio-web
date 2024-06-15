import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle> Techonologies</SectionTitle>
    <SectionText>
      Data Center based on Network EVPN-VxLAN
      Network Security with Fortigate Firewall
      Application Security with F5 BigIP
      Network Autmation
    </SectionText>

    <List>
        <ListItem>
          <DiFirebase size = "3rem"/>
          <ListContainer>
          <ListTitle>Software Engineer - Web Developement </ListTitle>
          <ListParagraph>
            Rest API
          </ListParagraph>

          </ListContainer>
        
        </ListItem>
        <ListItem>
        
        <DiFirebase size = "3rem"/>
        <ListContainer>
        <ListTitle>Network Engineer - Data Center (RnS) </ListTitle>
        <ListParagraph>
          EVPN-VXLAN on Junos Platform 
        </ListParagraph>

        </ListContainer>
      
      </ListItem>

    </List>
    <br/>
  </Section>
  
);

export default Technologies;
