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
        {/* <HornedBeast title = {"Rhino Family"} description = {"Parent rhino with two babies"} image_Url = {"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"}/> */}
      </>
    )
  }
}

export default Main; 

//src, alt and title attributes for image element