import React from "react";
import "./App.css";
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer'; 
import list from './data.json'; 
import Container from 'react-bootstrap/Container';




class App extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      showModal: false,
      selectedBeast: {}

    }
  }

 handleShowModal =(beastName)=>{
  const selectedBeast = list.find(beast => beast.title===beastName)
  //find the beast object whose name matches the beastName
  this.setState({showModal:true, selectedBeast});
 };

 handleExitModal=()=>{
  this.setState({showModal:false}); 
 };


  render() {
    return (
      <Container className="App">
        <Header/>
        <Main handleShowModal = {this.handleShowModal}/>
        <SelectedBeast
        showModal = {this.state.showModal}
        handleExitModal = {this.handleExitModal}
        selectedBeast = {this.state.selectedBeast}
        />
        <Footer/>
      </Container>
    ); 
  }
}

export default App;
