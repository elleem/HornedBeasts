import React from 'react'; 
import HornedBeast from './HornedBeast';
import list from './data.json'; 
import {Container, Row, Col} from 'react-bootstrap';




class Main extends React.Component{
  
  render (){
    return (
      <Container fluid id = 'main'>
      <Row md={2} lg={3}>
      {list.map(beast => (
        <Col>
        <HornedBeast title = {beast.title} 
        description = {beast.description} 
        image_url = {beast.image_url}
        handleShowModal = {this.props.handleShowModal}
        />
        </Col>
        ))}
        </Row>
        </Container>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element