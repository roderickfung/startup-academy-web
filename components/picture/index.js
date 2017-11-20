import React from 'react';

export default class Picture extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <img href={this.props.img}></img>
    )
  }
}