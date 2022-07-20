import React from "react";


class HornedBeast extends React.Component {
  render() {
    return (
      <div className="horned-beast">
      <h2> {this.props.title} </h2>
      <p>{this.props.description}</p>
      <img src= {this.props.imageUrl}
      alt = {this.props.description}
      title = {this.props.title}/>
      </div>
    )
  }
}

export default HornedBeast;