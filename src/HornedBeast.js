import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

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
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>🤘{this.state.votes}</Card.Text>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.title}
            height="100"
            width="100"
            rounded
            onClick={this.handleClick}
          />
        </Card.Body>
      </Card>
    );
  }
}

//src, alt and title attributes for image element

export default HornedBeast;
