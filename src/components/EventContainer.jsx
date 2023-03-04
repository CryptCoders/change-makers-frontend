import React from 'react'
import styled from 'styled-components';
import EventCards from './EventCards';

function EventContainer() {
  return (
    <Container>
    <EventCards/>
    <EventCards/>
    <EventCards/>
  </Container>
  )
}

export default EventContainer;

const Container=styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;
