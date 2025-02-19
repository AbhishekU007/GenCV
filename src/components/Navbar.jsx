import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Navbar() {
  const {user, isSignedIn} = useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <img src="/logo.svg" width={50} height={50}/>

      {isSignedIn ?
        <div className="flex gap-2 items-center">
          <Link to={'/dashboard'}>
          <Button className="mx-2 text-black" variant="outline">Dashboard</Button></Link>
          <UserButton/>
        </div>
        :
        <Link to={'/auth/sign-in'}>
        <Button>Get Started</Button></Link>
      }
    </div>
  )
}

export default Navbar
