import React from 'react';

import {aboutUsData} from '../../data';

import Section from '../../components/section';
export default class AboutUsPage extends React.Component {

  computeSection = aboutUsData.map( (section, index) => {
    return <Section
      key={index}
      header={section.header}
      subheader={section.subheader}
      paragraphs={section.p}
      icons={section.icons}
      gallery={section.gal}
      recognitions={section.recog}
    >
    </Section>
  })
  render() {
    return(
      <div className="about-us-container">
        {this.computeSection}
      </div>
    )
  }
}