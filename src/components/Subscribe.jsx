import React from 'react'

const Subscribe = () => {
  return (
    <div className='py-24 text-center bg-black text-white space-y-5'>
        <h1 className='text-3xl font-bold'>Join Our DEFI Community!</h1>
        <input type="email" placeholder='Enter your email' className='text-black focus:placeholder:opacity-0 placeholder:duration-150 p-3 rounded-3xl mr-4'/>
        <button className='btn-gradient p-5 rounded-full'>Sign Up</button>
        <div className='flex items-center justify-center py-2'>
            <input className='mr-2' type="checkbox" id='check' />
            <label htmlFor='check'>Yes, I agree to receive email communications from DeFi.</label>
        </div>
    </div>
  )
}

export default Subscribe;