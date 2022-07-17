import React from "react";
import "./App.css";
import Header from './Header';
import Footer from './Footer'; 
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main title = {"Unicorn"} description = {"magical horse"} imageUrl = {""}/>
        <Main title = {"Elephant"} description = {"wise land whale"} imageUrl = {""}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
