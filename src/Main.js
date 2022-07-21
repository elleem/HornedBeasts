import React from 'react'; 
import HornedBeast from './HornedBeast';
import list from './data.json'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      beast: list, 
    }
  }
  render (){
    return (
      <Container fluid>
      <Row md={3}>
      {this.state.beast.map(beast => (
        <Col md={3}>
        <HornedBeast title = {beast.title} description = {beast.description} image_url ={beast.image_url}/>
        </Col>
        ))}
        </Row>
        </Container>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element