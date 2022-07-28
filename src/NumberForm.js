import React from 'react'; 
import Form from 'react-bootstrap/Form';

class NumberForm extends React.Component{

  handleChange = (e)=>{
    let selection = parseInt(e.target.value); 
    let beastList = this.props.list; 
    if (selection){
      beastList = this.props.list.filter((beast) => beast.horns ===selection);
    }
      this.props.filterHorns(beastList); 
  }
  

  render (){
    return (
      <Form.Group id="form">
        <Form.Label id="form-id"> Search for Beasts by Number of Horns</Form.Label>
        <Form.Select id = "form-select" as= "select" onChange={this.handleChange}>
        <option value=""> search</option>
        <option value="1">single horn 🦄</option>
        <option value="2">double horns 📯</option>
        <option value="3">triple horns 🥳</option>
        <option value="100">one hundred horns 😈</option>
        </Form.Select>
    </Form.Group>
    )
  }
}

export default NumberForm; 