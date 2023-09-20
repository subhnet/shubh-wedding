import React from 'react'
import Slider from '../sections/Slider'
import { Header } from '../components/Header'
import { CoupleDetails } from '../components/CoupleDetails'

export const Home = () => {
  return (
    <div>

      <Slider />
      <Header></Header>
      <CoupleDetails />

    </div>
  )
}
