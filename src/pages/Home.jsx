import React from 'react'
import Ab from '../components/Ab'
import Service from '../components/Service'
import Quote from '../components/Quote'
import Journey from '../components/Journey'
import Book from '../components/Book'
import Hero6 from '../components/Hero6'
import Location from '../components/Location'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Hero6/>
        <Ab/>
        <Service/>
        <Quote/>
        <Journey/>
        <Book/>
        <Location/>

    </div>
  )
}

export default Home