import React from 'react';

import Content from '../../components/content';
export default class AboutUsPage extends React.Component {

  computeContent = mockContent.map( (content, index) => {
    return <Content>
      key={index}
      header={content.head}
      subHeader={content.subHead}
      paragraphs={content.p}
      icons={content.icons}
      gallery={content.gal}
      recognitions={content.recog}
    </Content>
  })
  render() {
    return(
      <div>
        <Content></Content>
      </div>
    )
  }
}