import React from 'react'; 

class Main extends React.Component{
  render (){
    return (
      <>
      <h2> {this.props.title} </h2>
      <p>{this.props.description}</p>
      <img src= {this.props.imageUrl}
      alt = {this.props.title}
      title = {this.props.tile}/>
      
      
      </>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element