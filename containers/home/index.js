import React from 'react';
import {Link} from 'react-router-dom';

import './home.less';
import './home-media@768.less';
import './home-media@425.less';

export default class Home extends React.Component {
  render() {
    return(
      <div className="home-page-container">
        <section id="page-one" className="section-page-one">
          <div className="container">
            <div className="title-container">
              <div className="side-dash-container">
                {/* .side-dash-light ignored in mobile view */}
                <hr className="side-dash-light"></hr>
              </div>
              <div>
                {/* #big-logo ignored ignored in web view */}
                <div id="big-logo">Logo</div>
                <h1 className="title-text-header-main">Startup hacks</h1>
                <h1 className="title-text-header-light">conference 2018</h1>
                <h3 className="title-text-sub">Vancouver, British Columbia</h3>
                {/* .side-dash-light .mobile ignored in web view*/}
                <hr className="side-dash-light mobile"></hr>
                <div className="title-text-desciption-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
              </div>
            </div>
            <div className="register-detail-container">
              <div className="register-detail-box-secondary"> Feb xx - Feb xx</div>
              <a href="https://www.eventbrite.com/e/startup-hacks-2018-entrepreneurship-competition-tickets-41177750761" className="register-details-button button">Register Now
                <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="social-icon-container">
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
          </div>
        </section>
        <section id="page-two">
          <div className="container">
            <center>
              <h1 className="title-text-header-main">What is startup hacks?</h1>
            </center>
            <hr className="hr-dash-main"></hr>
            <center>
              <div className="sub-heading-text-dark">
                <b>Startup Hacks is an entrepreneurship event like no other.</b>
              </div>
            </center>
            <center>
              <div className="description-container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </center>
            <center>
              <Link to="/about_us" id="learn-more-btn">LEARN MORE</Link>
            </center>
            <div className='image-section'>
              <img className="image-main" src="https://cdn-images-1.medium.com/fit/t/2400/1008/0*70lrk-G6peSVjhxq.jpeg" />
            </div>
          </div>
        </section>
        <section id="page-three">
          <div className="container-speaker">
            <div className="background-text-speakers">
              The speakers
            </div>
            <div className="container-speakers">
              <div className="title-speaker-container">
                <hr className="hr-dash-long-main"></hr>
                <div>
                  <h1 className="title-text-header-main">Meet the</h1>
                  <h1 className="title-text-header-dark">Speakers</h1>
                </div>
              </div>
              <div className="speakers-section">
                <div className="speaker-item-container" data-value="firstSpeaker">
                  <div className="speakers-image-container">
                    <img src='https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xNzEvMzI0L2kwMi9GbGFzaHBvaW50X1ZvbF8yXzEuanBn'/>
                  </div>
                  <div className="speaker-info">
                    <p>Name</p>
                    <p>Description</p>
                  </div>
                  <hr class="invisible-mobile"></hr>
                </div>
                <div className="speaker-item-container flipped" data-value="secondSpeaker">
                  <div className="speakers-image-container">
                    <img src='http://www.dccomics.com/sites/default/files/files/character-pops/batman_char-pop_58910497bad9c5.66936402.png'/>
                  </div>
                  <div className="speaker-info">
                    <p>Name</p>
                    <p>Description</p>
                  </div>
                  <hr class="invisible-mobile"></hr>
                </div>
                <div className="speaker-item-container" data-value="thirdSpeaker">
                  <div className="speakers-image-container">
                    <img src='https://vignette.wikia.nocookie.net/superman/images/1/11/Rebirth_superman_design.jpg/revision/latest?cb=20161009021408'/>
                  </div>
                  <div className="speaker-info">
                    <p>Name</p>
                    <p>Description</p>
                  </div>
                  <hr class="invisible-mobile"></hr>
                </div>
              </div>
              <div className="speakers-section">
                <div className="speaker-item-container flipped" data-value="fourthSpeaker">
                  <div className="speakers-image-container">
                    <img src="https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/xerm2pks59eqsq1kgwih.jpg"/>
                  </div>
                  <div>Name</div>
                  <div>Description</div>
                  <hr class="invisible-mobile"></hr>
                </div>
                <div className="speaker-item-container" data-value="fifthSpeaker">
                  <div className="speakers-image-container">
                    <img src='https://i.kinja-img.com/gawker-media/image/upload/s--qHo9BGTU--/c_scale,f_auto,fl_progressive,q_80,w_800/la0rvg3mwqudzz4rvp3d.jpg'/>
                  </div>
                  <div>Name</div>
                  <div>Description</div>
                  <hr class="invisible-mobile"></hr>
                </div>
                <div className="all-speakers-container">
                  <div className="all-speakers-section">
                    <div className="all-speakers-text-container">
                      <div className="all-speakers-plus-number">+12</div>
                      <div className="all-speakers-plus-text">Talented Industry Speakers</div>
                    </div>
                    <Link to="/speakers">
                      <div className="all-speakers-button">All speakers
                        <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <center>
                <div className="sub-heading-text-dark">Get Motivated by
                  <b>Speakers</b>,
                  <b>Mentors</b>,
                  <b>and judges</b> from:</div>
              </center>
              <div className="all-speakers-company-logo-container">
                <div className="all-speakers-company-logo-image">
                  <img src='http://dc-leather.com/wp-content/uploads/2017/07/DC_LOGO.png'/>
                </div>
                <div className="all-speakers-company-logo-image">
                  <img src='https://pbs.twimg.com/media/BjwXfvuCcAEC_Nf.jpg'/>
                </div>
                <div className="all-speakers-company-logo-image">
                  <img src='https://seeklogo.com/images/D/dc-shoes-logo-9849D1B3BF-seeklogo.com.png'/>
                </div>
                <div className="all-speakers-company-logo-image">
                  <img src='http://dc-leather.com/wp-content/uploads/2017/07/DC_LOGO.png'/>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section id="page-four">
          <div className="container-venue">
            <div className="background-text-speakers">
              Venue
            </div>
            <div className="venue-image-container">
              <div className='venue-image-section'>
                <img className="venue-image" src="http://www.gwegogledd.cymru/Content/Uploaded/Images/GWE/62c55715-e872-4000-b0db-31b355b1c818.jpg"/>
              </div>
              <div className="venue-image-overlay"></div>

              <div className="venue-title-text-container">
                <div className="venue-title-text-small">The conference will be held at the</div>
                <div className="venue-title-text-large">University of British Columbia</div>
                <div className="venue-title-text-small">at the CHAN Center in Vancouver, British Columbia</div>
              </div>
            </div>
            <div className="venue-description-container">
              <div className="venue-description blockquote">
                <div className="venue-description-title">
                  <b>What to Expect</b>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="venue-description">
                <div className="venue-description-title">
                  <div>
                    <b>What's Included</b>
                  </div>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </section>
        <section id="page-five">
          <div className="container">
            <center>
              <h1 className="title-text-header-dark">Where great minds unite.</h1>
            </center>
            <hr className="hr-dash-main"></hr>
            <center>
              <div className="sub-heading-text-dark">
                <b>Educate. Ideate. Collaborate.</b>
              </div>
            </center>
            <div className="stats-section">
              <div className="stats-container">
                <div className="stats-number" data-value="3"></div>
                <div className="stats-text">3 Amazing keynote Speakers</div>
              </div>
              <div className="stats-container">
                <div className="stats-number" data-value="12"></div>
                <div className="stats-text">12 essential workshops for startups</div>
              </div>
              <div className="stats-container">
                <div className="stats-number" data-value="70"></div>
                <div className="stats-text">Over 70 business professionals participating</div>
              </div>
              <div className="stats-container">
                <div className="stats-number" data-value="1000"></div>
                <div className="stats-text">Over $1000 worth of prizes to be won</div>
              </div>
            </div>
          </div>
        </section>
        <section id="page-six">
          <div className="container">
            <center>
              <h1 className="title-text-header-dark">Our sponsors</h1>
            </center>
            <hr className="hr-dash-main"></hr>
            <center>
              <div className="sub-heading-text-dark">We gratefully acknowledge the support of our sponsors whose contributions have made this event possible.</div>
            </center>
            <div className="sponsor-container">
              <div className="sponsor-bracket sponsor-bracket-left"></div>
              <div className="sponsor-bracket-middle">
                <div className="sponsor-image-container">
                  <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
                </div>
                <div className="sponsor-image-container">
                  <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
                </div>
                <div className="sponsor-image-container">
                  <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
                </div>
                <div className="sponsor-image-container">
                  <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
                </div>
              </div>
              <div className="sponsor-bracket sponsor-bracket-right"></div>
            </div>
          </div>
        </section>
        <section id="page-seven">
          <div className="container">
            <div className="reserve-title-block-container">
              <div className="reserve-title-block">
                <h1 className="title-text-header-main">Reserve</h1>
                <h1 className="title-text-header-light">Your spot</h1>
              </div>
            </div>
            <div className="reserve-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia d eserunt mollit anim id est laborum.
            </div>
            <div className="reserve-text-box-container">
              <div className="reserve-time-counter-container">
                Days Left
                <div className="reserve-time-counter">20</div>
              </div>
              <a href="https://www.eventbrite.com/e/startup-hacks-2018-entrepreneurship-competition-tickets-41177750761">
                <div className="all-speakers-button">Get Tickets
                  <i className="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
                </div>
              </a>
            </div>
            <a className="reserve-to-top-button" href='#'>
              <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
              Top
            </a>
          </div>
        </section>
      </div>
    );
  }
}
