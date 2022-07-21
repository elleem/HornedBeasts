import React from "react";


class HornedBeast extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      votes: 0 
    }
  }
    handleClick = () => {
      let newStatus = this.state.votes+1; 
      this.setState({votes: newStatus}); 
      return newStatus; 
    }
  render() {
    return (
      <>
      <h2> {this.props.title} </h2>
      <p>{this.props.description}</p>
      <img src= {this.props.image_url}
      alt = {this.props.description}
      onClick={this.handleClick}/>
      <h3>Current votes:{this.state.votes}</h3>
      </>
    )
  }
}

//src, alt and title attributes for image element

export default HornedBeast;