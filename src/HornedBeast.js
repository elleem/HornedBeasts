import React from "react";


class HornedBeast extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      votes: 0,
    }
  }
    handleClick = () => { 
      this.setState({votes: this.state.votes+1}); 
    }
  render() {
    return (
      <>
      <h2> {this.props.title} </h2>
      <p>{this.props.description}</p>
      <img src= {this.props.image_url}
      alt = {this.props.title}
      height= "100"
      width = "100"
      onClick={this.handleClick}/>
      <p>🤘{this.state.votes}</p>
      </>
    );
  }
}

//src, alt and title attributes for image element

export default HornedBeast;