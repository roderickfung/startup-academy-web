import React from 'react';
import Highlighter from 'react-highlight-words';

import './section.less';
import Icon from '../icon';
import Picture from '../picture';
import Recognition from '../recognition';
import Divider from '../divider';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header || ''
    }
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
    const subHeaders = this.props.subheader.length > 0 ? this.computeSubheaders : null;
    const paragraphs = this.props.paragraphs.length > 0 ? this.computeParagraphs : null;
    const icons = this.props.icons.length > 0 ? <div className="content">{this.computeIcons}</div> : null;
    const gallery = this.props.gallery.length > 0 ? <div className="content">{this.computeGallery}</div> : null;
    const recognitions = this.props.recognitions.length > 0 ? <div className="content">{this.computeRecognitions}</div> : null;
    console.log(this.state.header);
    return(
      <section className="section-container">
        {/* Highlighter is for Heading */}
        <Highlighter
          highlightClassName="section-header-highlighted"
          searchWords={this.props.blueWords}
          textToHighlight={this.state.header || ''}
          unhighlightClassName="section-header"
          highlightTag="span"
        >
        </Highlighter>
        <Divider width="15%"></Divider>
        {subHeaders}
        {paragraphs}
        {icons}
        {gallery}
        {recognitions}
      </section>
    )
  }
}