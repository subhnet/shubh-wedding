import React from 'react'
import Bride from '../pages/Bride';
import { Header } from '../components/Header'
import { CoupleDetails } from '../components/CoupleDetails'
import { EventDetails } from '../components/EventDetails';
import { Gallery } from '../components/Gallery';

export const Home = () => {
  return (
    <div>

      <Header></Header>
      <CoupleDetails />
      <Gallery />
      <EventDetails />
      

    </div>
  )
}
