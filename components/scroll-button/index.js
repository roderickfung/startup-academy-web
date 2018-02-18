import React from 'react';

import './scroll-button.less';

export default class ScrollButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return(
				<button 
					title='Back to top' className='scroll' 
        	onClick={ () => { this.scrollToTop(); }}>
          <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
        </button>
			)
   }
} 

// https://codepen.io/Qbrid/ <---- provided by this guy.