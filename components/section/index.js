import React from 'react';

import './section.css';
import Icon from '../icon';
import Picture from '../picture';
import Recognition from '../recognition';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  computeSubheaders = this.props.subheader.map( (subheader, index) => {
    return <h3 key={index} className="section-subheader">{subheader}</h3>
  } )
  computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="section-paragraphs">{paragraph}</p>
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
      <section className="section-container">
        <h1>{this.props.header}</h1>
        {this.computeSubheaders}
        {this.computeParagraphs}
        <div className="icons-container">{this.computeIcons}</div>
        {this.computeGallery}
        {this.computeRecognitions}
      </section>
    )
  }
}