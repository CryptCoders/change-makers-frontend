import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Templates from '../assets/images/webtemplate.jpeg'
function TemplateCards() {
  return (
    <Container>
    <Card >
      <Card.Body>
        <img src={Templates} style={{height:'10%'}} alt="" />
        <Card.Title>Template</Card.Title>
        
        <Card.Link href="#">Link</Card.Link>
        
      </Card.Body>
    </Card>
    </Container>
  );
}

export default TemplateCards;

const Container=styled.div`
    margin: 3%;
    box-shadow: rgba(0,0,0,0.40) 0px 15px 20px -6px;
    border-radius: 15px;
  
    .Card{
        border: none;
        border-radius: 15px;
           
    }
`;