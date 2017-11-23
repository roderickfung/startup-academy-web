import React from 'react';

import './picture.css';

export default class Picture extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="picture-container">
        <img src={this.props.img}></img>
      </div>
    )
  }
}