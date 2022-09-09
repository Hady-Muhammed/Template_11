import React from 'react'

const Card = ({src , head , p}) => {
  return (
    <div className='border rounded-xl p-5 py-12'>
        <div className='text-black w-[50px] rounded-full bg-[#00dff8] p-2 flex items-center justify-center h-[50px]'>
        {src}
        </div>  
        <h2 className='font-bold text-xl my-4'>{head}</h2>
        <p className='text-white/70'>{p}</p>
    </div>
  )
}

export default Card