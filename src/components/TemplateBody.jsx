import React from 'react'
import styled from 'styled-components';
import CarrdPage from './CarrdPage';
// import TemplateContainer from './TemplateContainer';
function TemplateBody() {
  return (
    <Container id='temp'>
        <h1>Templates</h1>
        <div className='cards'>
          <CarrdPage/>

        </div>
    </Container>
  )
}

export default TemplateBody;

const Container=styled.div`
        text-align: center;
        justify-content: center;
        padding-bottom: 3%;
       h1{
        font-weight: bold;
        font-size: 60px;
        width: 100%;
        margin-bottom:5%;
    }

    .cards{
      display: flex;
      text-align: center;
      justify-content: center;
    }
`;