import React from "react";
import "./App.css";
import Header from './Header';
import Footer from './Footer'; 
import Main from './Main';
import HornedBeast from './HornedBeast'; 


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
        <HornedBeast/>
        <Footer/>
      </div>
    ); 
  }
}

export default App;
