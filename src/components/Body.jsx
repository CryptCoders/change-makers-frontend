import React from 'react'
import styled from 'styled-components';
import Homeimg from '../assets/images/homeImg.jpeg';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
function Body() {
  return (
    <Container>
      <div className='text'>
        <h1>Join Us in Making <br /> a Difference</h1>
        <h3> Build a powerful online presence for <br /> your NGO with our easy-to-use <br /> website builder</h3>
        <Button href="#" variant="warning" size="lg" active>
        See Templates
      </Button>
      </div>
      <div className='img'>
        <img src={Homeimg} alt="" />
      </div>
    </Container>
  )
}

export default Body;

const Container=styled.div`
   
    margin: 2%;
    padding: 5%;
    border-radius: 15px;
    box-shadow: rgba(0,0,0,0.40) 0px 25px 40px -12px;
    display: flex;
    .text{
        width: 50%;
       
        justify-content: center;
        h1{
            font-weight: bold;
            font-size: 60px;
            padding-bottom: 2px;
        }
        h3{
            font-weight: bold;
            padding: 3px;
            margin-bottom: 4%;

        }
        
    }
    .img{
        height: 10%;
    }
`;

