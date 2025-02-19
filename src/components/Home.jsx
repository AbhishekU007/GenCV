import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>
    </div>
  )
}

export default Home
