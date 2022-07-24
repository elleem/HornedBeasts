import React from 'react'; 
import {Modal, Button, Image} from 'react-bootstrap';

class SelectedBeast extends React.Component{
  render (){
    return (
      <>
      <Modal show={this.props.showModal} onHide={this.props.handleExitModal}>
          <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Image src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.title}
            title={this.props.selectedBeast.title} />
          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.props.handleExitModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast; 