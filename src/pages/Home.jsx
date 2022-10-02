import React from 'react'
import Slidebar from '../Components/Slidebar/Slidebar'
import Chat from '../Components/Chat/Chat'
const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
         <Slidebar/>
         <Chat/>
        </div>
    </div>
  )
}

export default Home