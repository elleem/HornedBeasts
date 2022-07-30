import React from 'react'; 
import HornedBeast from './HornedBeast'; 
import {Container, Row, Col} from 'react-bootstrap';




class Main extends React.Component{
  
  render (){
    return (
      <Container fluid id = 'main'>
      <Row md={2} lg={3}>
      {this.props.list.map(beast => (
        <Col>
        <HornedBeast 
        key={beast._id}
        title = {beast.title} 
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