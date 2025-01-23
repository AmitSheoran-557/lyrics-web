import React from 'react'
import Hero from '../components/Hero'
import SongsList from '../components/SongsList'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <SongsList/>
        <Footer/>
    </div>
  )
}

export default Home