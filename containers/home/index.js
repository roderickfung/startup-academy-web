import React from 'react';

import './home.css';

export default class Home extends React.Component {
  render() {
    return(
      <div class="home-page-container">
        <section id="page-one" class="section-page-one">
          <div class="container">
            <div class="title-container">
              <div class="side-dash-container">
                <hr class="side-dash-light"></hr>
              </div>
              <div>
                <h1 class="title-text-header-main">Startup hacks</h1>
                <h1 class="title-text-header-light">conference 2018</h1>
                <h3 class="title-text-sub">Vancouver, British Columbia</h3>
                <div class="title-text-desciption-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
              </div>
            </div>
            <div class="register-detail-container">
              <div class="register-detail-box-secondary"> Feb xx - Feb xx</div>
              <a href="#" class="register-details-button button">Register Now
                <i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
        <section id="page-two">
          <div class="container">
            <center>
              <h1 class="title-text-header-main">What is startup hacks?</h1>
            </center>
            <hr class="hr-dash-main"></hr>
            <center>
              <div class="sub-heading-text-dark">
                <b>Startup Hacks is an entrepreneurship event like no other.</b>
              </div>
            </center>
            <center>
              <div class="description-container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </center>
            <center>
              <button class="learn-more-button" type="button" href="#">Learn more</button>
            </center>
            <div class='image-section'>
              <img class="image-main" src="https://cdn-images-1.medium.com/fit/t/2400/1008/0*70lrk-G6peSVjhxq.jpeg" />
            </div>
          </div>
        </section>
  <section id="page-three">
    <div id="speaker-modal" title="Speaker Info">
      <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="container-speaker">
      <div class="background-text-speakers">
        The speakers
      </div>
      <div class="container-speakers">
        <div class="title-speaker-container">
          <hr class="hr-dash-long-main"></hr>
          <div>
            <h1 class="title-text-header-main">Meet the</h1>
            <h1 class="title-text-header-dark">Speakers</h1>
          </div>
        </div>
        <div class="speakers-section">
          <div class="speaker-item-container" data-value="firstSpeaker">
            <div class="speakers-image-container">
              <img src='https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xNzEvMzI0L2kwMi9GbGFzaHBvaW50X1ZvbF8yXzEuanBn'/>
            </div>
            <div>Name</div>
            <div>Description</div>
            <hr></hr>
          </div>
          <div class="speaker-item-container" data-value="secondSpeaker">
            <div class="speakers-image-container">
              <img src='http://www.dccomics.com/sites/default/files/files/character-pops/batman_char-pop_58910497bad9c5.66936402.png'/>
            </div>
            <div>Name</div>
            <div>Description</div>
            <hr></hr>
          </div>
          <div class="speaker-item-container" data-value="thirdSpeaker">
            <div class="speakers-image-container">
              <img src='https://vignette.wikia.nocookie.net/superman/images/1/11/Rebirth_superman_design.jpg/revision/latest?cb=20161009021408'/>
            </div>
            <div>Name</div>
            <div>Description</div>
            <hr></hr>
          </div>
        </div>
        <div class="speakers-section">
          <div class="speaker-item-container" data-value="fourthSpeaker">
            <div class="speakers-image-container">
              <img src="https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/xerm2pks59eqsq1kgwih.jpg"/>
            </div>
            <div>Name</div>
            <div>Description</div>
            <hr></hr>
          </div>
          <div class="speaker-item-container" data-value="fifthSpeaker">
            <div class="speakers-image-container">
              <img src='https://i.kinja-img.com/gawker-media/image/upload/s--qHo9BGTU--/c_scale,f_auto,fl_progressive,q_80,w_800/la0rvg3mwqudzz4rvp3d.jpg'/>
            </div>
            <div>Name</div>
            <div>Description</div>
            <hr></hr>
          </div>
          <div class="all-speakers-container">
            <div class="all-speakers-section">
              <div class="all-speakers-text-container">
                <div class="all-speakers-plus-number">+12</div>
                <div class="all-speakers-plus-text">Talented Industry Speakers</div>
              </div>
              <div class="all-speakers-button">All speakers
                <i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div class="sub-heading-text-dark">Get Motivated by
            <b>Speakers</b>,
            <b>Mentors</b>,
            <b>and judges</b> from:</div>
        </center>
        <div class="all-speakers-company-logo-container">
          <div class="all-speakers-company-logo-image">
            <img src='http://dc-leather.com/wp-content/uploads/2017/07/DC_LOGO.png'/>
          </div>
          <div class="all-speakers-company-logo-image">
            <img src='https://pbs.twimg.com/media/BjwXfvuCcAEC_Nf.jpg'/>
          </div>
          <div class="all-speakers-company-logo-image">
            <img src='https://seeklogo.com/images/D/dc-shoes-logo-9849D1B3BF-seeklogo.com.png'/>
          </div>
          <div class="all-speakers-company-logo-image">
            <img src='http://dc-leather.com/wp-content/uploads/2017/07/DC_LOGO.png'/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </section>
  <section id="page-four">
    <div class="container-venue">
      <div class="background-text-speakers">
        Venue
      </div>
      <div class="venue-image-container">
        <div class='venue-image-section'>
          <img class="venue-image" src="http://www.gwegogledd.cymru/Content/Uploaded/Images/GWE/62c55715-e872-4000-b0db-31b355b1c818.jpg"/>
        </div>
        <div class="venue-image-overlay"></div>

        <div class="venue-title-text-container">
          <div class="venue-title-text-small">The conference will be held at the</div>
          <div class="venue-title-text-large">University of British Columbia</div>
          <div class="venue-title-text-small">at the CHAN Center in Vancouver, British Columbia</div>
        </div>
      </div>
      <div class="venue-description-container">
        <div class="venue-description blockquote">
          <div class="venue-description-title">
            <b>What to Expect</b>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="venue-description">
          <div class="venue-description-title">
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
    <div class="container">
      <center>
        <h1 class="title-text-header-dark">Where great minds unite.</h1>
      </center>
      <hr class="hr-dash-main"></hr>
      <center>
        <div class="sub-heading-text-dark">
          <b>Educate. Ideate. Collaborate.</b>
        </div>
      </center>
      <div class="stats-section">
        <div class="stats-container">
          <div class="stats-number" data-value="3"></div>
          <div class="stats-text">3 Amazing keynote Speakers</div>
        </div>
        <div class="stats-container">
          <div class="stats-number" data-value="12"></div>
          <div class="stats-text">12 essential workshops for startups</div>
        </div>
        <div class="stats-container">
          <div class="stats-number" data-value="70"></div>
          <div class="stats-text">Over 70 business professionals participating</div>
        </div>
        <div class="stats-container">
          <div class="stats-number" data-value="1000"></div>
          <div class="stats-text">Over $1000 worth of prizes to be won</div>
        </div>
      </div>
    </div>
  </section>
  <section id="page-six">
    <div class="container">
      <center>
        <h1 class="title-text-header-dark">Our sponsors</h1>
      </center>
      <hr class="hr-dash-main"></hr>
      <center>
        <div class="sub-heading-text-dark">We gratefully acknowledge the support of our sponsors whose contributions have made this event possible.</div>
      </center>
      <div class="sponsor-container">
        <div class="sponsor-bracket sponsor-bracket-left"></div>
        <div class="sponsor-bracket-middle">
          <div class="sponsor-image-container">
            <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
          </div>
          <div class="sponsor-image-container">
            <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
          </div>
          <div class="sponsor-image-container">
            <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
          </div>
          <div class="sponsor-image-container">
            <img src='http://ladieslearningcode.com/wp-content/uploads/2016/01/codecore.png'/>
          </div>
        </div>
        <div class="sponsor-bracket sponsor-bracket-right"></div>
      </div>
    </div>
  </section>
  <section id="page-seven">
    <div class="container">
      <div class="reserve-title-block-container">
        <div class="reserve-title-block">
          <h1 class="title-text-header-main">Reserve</h1>
          <h1 class="title-text-header-light">Your spot</h1>
        </div>
      </div>
      <div class="reserve-text-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia d eserunt mollit anim id est laborum.
      </div>
      <div class="reserve-text-box-container">
        <div class="reserve-time-counter-container">
          Days Left
          <div class="reserve-time-counter">20</div>
        </div>
        <div class="all-speakers-button">Get Tickets
          <i class="fa fa-arrow-right fa-1x" aria-hidden="true"></i>
        </div>
      </div>
      <a class="reserve-to-top-button" href='#'>
        <i class="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
        Top
      </a>
    </div>
  </section>
</div>
    );
  }
}
