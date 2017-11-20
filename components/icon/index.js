import React from 'react';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="container">
        <img href={this.props.img}></img>
        <p className="info">{this.props.info}</p>
      </div>
    )
  }
}