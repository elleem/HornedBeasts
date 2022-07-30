import React from 'react'; 
import Container from 'react-bootstrap/Container'; 

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      footer: 'created by Lauren'
    }
  }

  clickHandler = () => {
    let newStatus = this.state.footer === 'created by Lauren'? '⚡': 'created by Lauren'; 
    this.setState({footer: newStatus}); 
  }
  render (){
    return (
      <Container fluid id = 'footer'>
      <h3 onClick={this.clickHandler}> 
      {this.state.footer}
      </h3>
      </Container>
    )
  }
}

export default Footer; 