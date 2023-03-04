import React from 'react'
import styled from 'styled-components';
import TemplateCards from './TemplateCards'
// import Container from 'react-bootstrap/Container';
function Body() {
  return (
    <>
    <Container>
      <div className='text'>
        <h1>Join Us in Making a Difference</h1>
        <h2> Build a Powerful Online Presence for Your NGO with Our Easy-to-Use Website Builder</h2>
      </div>
      <div className='img'>
        <img src="" alt="" />
      </div>
    </Container>
    <div>
        <TemplateCards/>
    </div>
    </>
  )
}

export default Body;

const Container=styled.div`
   
    margin: 5%;
    padding: 5%;
    border-radius: 15px;
    box-shadow: rgba(0,0,0,0.40) 0px 25px 40px -12px;
    display: flex;
    .text{
        width: 50%;
        h1{
            font-weight: bold;
        }
    }
`;

