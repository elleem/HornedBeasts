import React from "react";
import "./App.css";
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import NumberForm from './NumberForm'; 
import Footer from './Footer'; 
import list from './data.json'; 
import Container from 'react-bootstrap/Container';




class App extends React.Component {

  constructor(props){
    super(props); 
    this.state = {
      list:list,
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

 filterHorns = (filterList) =>{
  this.setState({list:filterList});
 }; 

 handleChange = (event) =>{
  event.preventDefault(); 
  this.setState({Horns: event.target.value}); 
 }


  render() {
    return (
      <Container className="App">
        <Header/>
        <NumberForm 
        list = {list} 
        filterHorns={this.filterHorns}/>
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
