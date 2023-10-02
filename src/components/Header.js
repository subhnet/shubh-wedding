import React from 'react'
import '../App.css';


export const Header = () => {
  return (
    <header>
      <div>
   <div class="hero-text-box">
                <div class="text">Shubhangi & Subhranshu</div>

                <div className='invitation'>
                  <hr className='horizontal-line'/>
                  <div className='invitation-text'>
                  <h2>We're getting Married</h2>
                  </div>
                  <hr className='horizontal-line'/>
                  </div>
    
                <a class="btn btn-full js--scroll-to-plans" href="#">Bride</a>
                <a class="btn btn-ghost js--scroll-to-start" href="#">Groom</a>
                
                </div>

    
    </div>
    {/* <div class="save-the-date popup-save-the-date">
      ::before
      <h4>Save the date</h4>
      <span class="date">8 DEC 2023</span>
      ::after
    </div> */}
    </header>
  )
}
