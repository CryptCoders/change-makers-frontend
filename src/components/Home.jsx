import React from 'react'
import styled from 'styled-components';
import Homeimg from '../assets/images/homeImg.jpeg';
import "../css/navbar.css";
import axios from 'axios';
// import Container from 'react-bootstrap/esm/Container';
// import Container from 'react-bootstrap/Container';
function Home() {
  
  return (
    <Container>
      <div className='text'>
        <h1>Join Us in Making <br /> a Difference</h1>
        <h4> Build a powerful online presence for <br /> your NGO with our easy-to-use <br /> website builder</h4>
        <button className='tempbtn'>See Templates</button>
      </div>
      <div className='img'>
        <img src={Homeimg} alt="" />
      </div>
    </Container>
  )
}

export default Home;


const Container=styled.div`
  margin: 2%;
    padding: 5%;

    display: flex;
    .text{
        width: 50%;   
        justify-content: center;
        
        h1{
            font-weight: 900;
            font-size: 60px;
            padding-bottom: 2px;
        }
        h4{
          
            padding: 3px;
            line-height: 130%;
            margin-bottom: 4%;

        }

        .tempbtn{
          background-color: #00abe4;
          font-size: 0.9375rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.11rem;
          text-decoration: none;
          display: inline-block;
          padding: 0.9375rem 2.1875rem;
          border-radius: 5rem;
          transition: all 0.2s;
          position: relative;
          transform: rotate(0);
          backface-visibility: hidden;
          border: none;
          cursor: pointer;
          font-weight: bold !important;

        &:active
        {
            box-shadow: 0 0.5rem 2rem rgba(black, 0.2);
            transform: translateY(-0.1rem);
        }

        &:hover{
            background-color: #2373ff;;
        }
        }
        
    }
    .img{
        height: 10%;
    }
`;