import React from 'react'
import styled from 'styled-components';
import EventContainer from './EventContainer';


function Events() {
  return (
    <Container>
        <h1>Events</h1>
        <EventContainer/>
    </Container>
  )
}

export default Events;


const Container=styled.div`
        text-align: center;
        justify-content: center;
        padding-bottom: 2%;
        h1{
        font-weight: bold;
        font-size: 60px;
        width: 100%;
        margin-top: 5%;
    }
`;