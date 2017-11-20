import React from 'react';

import Icon from '../icon';
import Picture from '../picture';
import Recognition from '../recognition';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
  })
  
  computeIcons = this.props.icons.map( (icon, index) =>{
    return <Icon key={index} img={icon.img} info={icon.info}></Icon>
  })

  computeGallery = this.props.gallery.map((picture, index) =>{
    return <Picture key={index} img={picture}></Picture>
  })

  computeRecognitions = this.props.recognitions.map((person, index)=>{
    return <Recognition key={index} img={person.img} desc={person.description} name={person.name}></Recognition>
  })

  render() {
    console.log(this.props)
    return(
      <div className="container">
        <h1>{this.props.head}</h1>
        {this.computeParagraphs}
        {this.computeIcons}
        {this.computeGallery}
        {this.computeRecognitions}
      </div>
    )
  }
}