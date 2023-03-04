import React from 'react'
import styled from 'styled-components';
import TemplateContainer from './TemplateContainer';
function TemplateBody() {
  return (
    <Container>
        <h1>Templates</h1>
        <TemplateContainer/>
    </Container>
  )
}

export default TemplateBody;

const Container=styled.div`
        text-align: center;
        justify-content: center;
        /* padding-bottom: 2%; */
       h1{
        font-weight: bold;
        font-size: 60px;
        width: 100%;
        margin-top: 7%;
    }
`;