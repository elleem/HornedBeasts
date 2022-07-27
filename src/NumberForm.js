import React from 'react'; 
import Form from 'react-bootstrap/Form';

class NumberForm extends React.Component{
  render (){
    return (
      <Form.Group className="mb-3">
      {/* //<Form.Label>Disabled select menu</Form.Label> */}
      <Form.Select onChange={this.handleChange}>
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