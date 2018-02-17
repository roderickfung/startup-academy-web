import React from 'react';

import {aboutUsData} from '../../data';

import './about-us.css';
import Section from '../../components/section';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default class AboutUsPage extends React.Component {

  computeSection = aboutUsData.sections.map( (section, index) => {
    return <Section
      key={index}
      header={section.header}
      subheader={section.subheader || []}
      paragraphs={section.p || []}
      icons={section.icons || []}
      gallery={section.gal || []}
      recognitions={section.recog || []}
      blueWords={section.blueWords || []}
    >
    </Section>
  })

  handleBackToTopClick = function () {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="about-us-container">
        <Header 
          backgroundImage={aboutUsData.header.backgroundImage} 
          title={aboutUsData.header.title} 
          details={aboutUsData.header.details}>
        </Header>
        {this.computeSection}
        <div className="scroll-to-top-container">
          <button className="scroll-top-button" onClick={this.handleBackToTopClick}>&#9651;</button>
          <p>top</p>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}