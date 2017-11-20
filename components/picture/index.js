import React from 'react';

export default class Picture extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <img src={this.props.img}></img>
    )
  }
}