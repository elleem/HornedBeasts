import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }
  handleClick = () => {
    this.setState({ votes: this.state.votes + 1 });
  };
  render() {
    return (
      <Card style={{ width: "18rem" }} id='card' className='h-100' >
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>🤘{this.state.votes}</Card.Text>
        </Card.Body>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.title}
            rounded
            onClick={this.handleClick}
          />
          <Button onClick={()=>this.props.handleShowModal(this.props.title)}> Expand </Button>
      </Card>
    );
  }
}

//src, alt and title attributes for image element

export default HornedBeast;
