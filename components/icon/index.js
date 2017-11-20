import React from 'react';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="container">
        <img src={this.props.img}></img>
        <p className="info">{this.props.info}</p>
      </div>
    )
  }
}