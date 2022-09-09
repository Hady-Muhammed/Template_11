import React from 'react'
import terminal from '../assets/terminal.png'
const Developers = () => {
  return (
    <div className='bg-black text-white py-15'>
        <div className='max-w-[1040px] mx-auto '>
            <h1 className='mb-3 text-2xl font-bold'>Superpowers for DEFI developers</h1>
            <p>Checkout the <span className='text-[#00dff8]'>documentation</span> , the <span className='text-[#00dff8]'>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
            <img className='mx-auto mt-20 shadow shadow-blue img-dev' src={terminal} alt="terminal" />
        </div>
    </div>
  )
}

export default Developers