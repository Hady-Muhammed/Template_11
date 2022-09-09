import React from 'react'
import List from './List'
const Footer = () => {
  return (
    <footer className='bg-black flex xs:flex-col lg:flex-row justify-around text-white pb-12'>
        <List head='Products'/>
        <List head='Developers'/>
        <List head='Governance'/>
        <List head='Community'/>
        <List head='About'/>
    </footer>
  )
}

export default Footer