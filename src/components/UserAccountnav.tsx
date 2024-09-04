'use client'

import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const UserAccountnav = () => {
  return (
    <Button onClick={()=>signOut(
        {
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`
        }
    )} variant='destructive'>
              Sign Out
            </Button> 
  )
}

export default UserAccountnav