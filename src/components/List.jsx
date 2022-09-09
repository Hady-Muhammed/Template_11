import React from 'react'

const List = ({head}) => {
  return (
    <ul className='space-y-5 text-center'>
        <h1 className="w-fit mx-auto border-b-4 p-2 border-b-[#00dff8] font-semibold text-xl">{head}</h1>
        <li>App</li>
        <li>Analytics</li>
        <li>Token Lists</li>
        <li>Defi</li>
    </ul>
  )
}

export default List