import React from 'react';

import Icon from '/icon';
import Picture from '/picture';
import Recognition from '/recognition';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

  }

  computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
  })
  
  computeIcons = this.props.icons.map( (icon, index) =>{
    return <Icon img={icon.img} info={icon.info}></Icon>
  })

  computeGallery = this.props.gallery.map((picture, index) =>{
    return <Picture img={picture.img}></Picture>
  })

  computeRecognitions = this.props.recognitions.map((person, index)=>{
    return <Recognition img={person.img} desc={person.description} name={person.name}></Recognition>
  })

  render() {
    return(
      <div className="container">
        <h1>{this.props.head}</h1>
        <lineBreak></lineBreak>
        {this.computeParagraphs}
        {this.computeIcons}
        {this.computeGallery}
        {this.computeRecognitions}
      </div>
    )
  }
}




{/* <Content>
      key={index}
      header={content.head}
      subHeader={content.subHead}
      paragraphs={content.p}
      icons={content.icons}
      gallery={content.gal}
      recognitions={content.recog}
    </Content> */}