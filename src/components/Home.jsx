import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function Home() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>

      <UserButton/>
    </div>
  )
}

export default Home
