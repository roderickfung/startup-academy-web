import React from 'react';

import {aboutUsData} from '../../data';

import Content from '../../components/content';
export default class AboutUsPage extends React.Component {

  computeContent = aboutUsData.map( (content, index) => {
    return <Content
      key={index}
      header={content.head}
      subHeader={content.subHead}
      paragraphs={content.p}
      icons={content.icons}
      gallery={content.gal}
      recognitions={content.recog}
    >
    </Content>
  })
  render() {
    return(
      <div>
        {this.computeContent}
      </div>
    )
  }
}