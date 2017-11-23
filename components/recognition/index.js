import React from 'react';

import './recognition.css';

export default class Recognition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="recognition-container">
        <img src={this.props.img}></img>
        <p className="recognition-name">{this.props.name}</p>
        <p className="recognition-desc">{this.props.desc}</p>
      </div>
    )
  }
}