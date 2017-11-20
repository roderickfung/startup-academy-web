import React from 'react';

export default class Recognition extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <img href={this.props.img}></img>
        <p className="name">{this.props.name}</p>
        <p className="desc">{this.props.desc}</p>
      </div>
    )
  }
}