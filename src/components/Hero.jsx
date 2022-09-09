import React from 'react'
import HeroVid from '../assets/video.mp4'
const Hero = () => {
  return (
    <section className='text-center h-[90vh] relative text-white flex justify-center flex-col items-center'>
        <video className='object-cover h-full w-full absolute z-[-1]' src={HeroVid} autoPlay loop muted/>
        <h1 className='font-bold text-4xl'>Decentralized <span className='text-[#00dff8]'>Trading</span> Protocol</h1>
        <p className='my-5 text-white/70'>Guaranteed liquidity trading for millions of users <br className='sm:hidden lg:block'/> and top Ethereum applications</p>
        <div className='w-full flex justify-center xs:flex-col md:flex-row xs:space-y-4 md:space-y-0'>
        <button className='lg:w-[15%] xs:mr-0 md:mr-12 btn-gradient p-5 rounded-full'>Use Defi</button>
        <button className='lg:w-[15%] rounded-full border p-5 border-[#00dff8] text-[#00dff8]'>FAQ</button>
        </div> 
        <p className='font-bold text-3xl absolute bottom-10'>Total Volume Secured: $42,104,224,7600</p>
    </section>
  )
}

export default Hero;