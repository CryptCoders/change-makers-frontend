import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

function TextExample() {
  return (
    <Container>
    <Card >
      <Card.Body>
        <Card.Title>Event Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">NGO Name</Card.Subtitle>
        <Card.Text>
          Event Discription Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, officia.
        </Card.Text>
        <Card.Subtitle>Time : 20 March 10.00 am</Card.Subtitle>
        <Card.Link href="#">Link</Card.Link>
        
      </Card.Body>
    </Card>
    </Container>
  );
}

export default TextExample;

const Container=styled.div`
    width: 30%;
    margin: 3%;
    box-shadow: rgba(0,0,0,0.40) 0px 15px 20px -6px;
    border-radius: 15px;
    .Card{
        border: none;
        border-radius: 15px;
        
    }
`;