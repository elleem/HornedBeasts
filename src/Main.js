import React from 'react'; 

class Main extends React.Component{
  render (){
    return (
      <>
      <h2> {this.props.title} </h2>
      <p>{this.props.description}</p>
      <img> {this.props.imageUrl}</img>
      </>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element