import React from 'react'; 

class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      footer: 'created by Lauren'
    }
  }

  clickHander = () => {
    let newStatus = this.state.footer === 'created by Lauren'? '⚡': 'created by Lauren'; 
    this.setState({footer: newStatus}); 
  }
  render (){
    return (
      <>
      <h3 onClick={this.clickHander}> 
      {this.state.footer}
      </h3>
      </>
    )
  }
}

export default Footer; 