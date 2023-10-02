import React from 'react';
import CountdownTimer from './timer/CountdownTimer';

import '../App.css'
export function Display() {
  const THREE_DAYS_IN_MS = 67 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className='invitation timer'>
      <p className='timer-text'>Countdown Timer</p>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
export default Display;
