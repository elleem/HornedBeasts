import React from 'react'; 
import HornedBeast from './HornedBeast';
import list from './data.json'; 



class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      beast: list, 
    }
  }
  render (){
    return (
      <>
      {this.state.beast.map(beast =>
        <HornedBeast title = {beast.title} description = {beast.description} image_url ={beast.image_url}/>
        )}
      </>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element