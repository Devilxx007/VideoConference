import React from 'react'
import { SignIn } from '@clerk/nextjs'
const SignInPage = () => {
  return (
    <main className=' flex h-screen w-full flex-col items-center justify-center'>
        <SignIn/>
    </main>
  )
}

export default SignInPage