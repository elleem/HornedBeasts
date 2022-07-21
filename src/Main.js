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
        <HornedBeast title = {list[0].title} description = {list[0].description} image_url ={list[0].image_url}/>
        
      </>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element