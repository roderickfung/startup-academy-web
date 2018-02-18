import React from 'react';

import {aboutUsData} from '../../data';

import './about-us.css';
import Section from '../../components/section';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ScrollButton from '../../components/scroll-button';

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
          <ScrollButton scrollStepInPx="75" delayInMs="13.66"></ScrollButton>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}