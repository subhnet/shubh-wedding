import React, { useEffect, useState } from 'react';
import '../App.css';
import WOW from 'wowjs';
import 'animate.css';

import slide1Image from '../assets/images/pic1.jpg';


export const Header = () => {
  const [activeTab, setActiveTab] = useState('groom');

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };


  return (
    <>
      <section class="hero">
        <div className="hero-slider hero-slider-s1 slick-initialized slick-slider slick-dotted" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox">
              <div
                className="slide-item slick-slide slick-current slick-active"
                style={{
                  backgroundImage: `url(${slide1Image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '1980px',
                  position: 'relative',
                  left: '0px',
                  top: '0px',
                  // zIndex: 999,
                  opacity: 1,
                }}
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="-1"
                role="option"
                aria-describedby="slick-slide00"
              ></div>
            </div>
          </div>
        </div>
        <div class="wedding-announcement">
          <div class="couple-name-merried-text">
            <h2 class="wow slideInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDelay: '1s' }}>
              Subhransu &amp; Shubhangi
            </h2>
            <div className="married-text wow fadeIn" style={{ visibility: 'visible', animationDelay: '1s' }}>
              <h4 className="">
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.05s' }}>W</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.10s' }}>e</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.15s' }}>'</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.20s' }}>r</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.25s' }}>e</span>
                <span>&nbsp;</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.30s' }}>g</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.35s' }}>e</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.40s' }}>t</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.45s' }}>t</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.50s' }}>i</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.55s' }}>n</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.60s' }}>g</span>
                <span>&nbsp;</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.65s' }}>m</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.70s' }}>a</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.75s' }}>r</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.80s' }}>r</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.85s' }}>i</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.90s' }}>e</span>
                <span className="wow fadeInUp" style={{ visibility: 'visible', animationDelay: '1.95s' }}>d</span>
              </h4>
            </div>
            <div className="couple-buttons">
              <div class="tablist">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'groomsmen' ? 'active royal-button' : 'royal-button'}`}
                      onClick={() => handleTabClick('groomsmen')}
                      role="tab"
                      aria-controls="groomsmen"
                      aria-selected={activeTab === 'groomsmen' ? 'true' : 'false'}
                    >
                      Groom
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'bridesmaid' ? 'active royal-button' : 'royal-button'}`}
                      onClick={() => handleTabClick('bridesmaid')}
                      role="tab"
                      aria-controls="bridesmaid"
                      aria-selected={activeTab === 'bridesmaid' ? 'true' : 'false'}
                    >
                      Bride
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div>
        <div class="hero-text-box">
          <div class="text">Shubhangi & Subhranshu</div>
          <div className='invitation'>
            <hr className='horizontal-line' />
            <div className='invitation-text'>
              <h2>We're getting Married</h2>
            </div>
            <hr className='horizontal-line' />
          </div>
          <a class="btn btn-full js--scroll-to-plans" href="#">Bride</a>
          <a class="btn btn-ghost js--scroll-to-start" href="#">Groom</a>
        </div>
      </div> */}
          {/* <div class="save-the-date popup-save-the-date">
      ::before
      <h4>Save the date</h4>
      <span class="date">8 DEC 2023</span>
      ::after
    </div> */}
        </div>
      </section>
    </>
  )
}
