import React from 'react'
import styled from 'styled-components';
import TemplateCards from './TemplateCards';

function TemplateContainer() {
  return (
   
    
    <Container>
      <TemplateCards/>
    </Container>
  
  )
}

export default TemplateContainer;

const Container=styled.div`
    margin: 4%;
    text-align: center;
    justify-content: center;
    display: flex; 

`;


