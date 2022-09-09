import React from 'react'
import Card from './Card'
import {SiHiveBlockchain , SiStrapi , SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'
const About = () => {
  return (
    <div className='px-4 py-16 bg-black text-white text-center'>
        <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl font-bold'>A Growing Protocol Ecosystem</h1>
        <p className='mt-5 text-white/70'>The Defi protocol system empowers developers. liquidty providers, and 
            traders to participate in a financial marketplace that is open and accessible to all.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-col-4 gap-10 mt-16 text-left w-[80%] mx-auto'>
            <Card src={<SiHiveBlockchain size={40}/>} head='Reliable, tamper-proof network' p='Use decentralization trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract'/>
            <Card src={<SiStrapi size={40}/>} head='Seamless connection to any API' p='Build on a flexible framework that can retrieve data from any API ,connect with existing systems, and integrate with any current or future blockchain'/>
            <Card src={<SiFsecure size={40}/>} head='Proven, ready-made solutions' p='Integrate pre-built, time-tested oracle solutions that already secure tens of billons in smart contract values in market-leading decentralized application'/>
            <Card src={<VscServerProcess size={40}/>} head='Secure off-chain computation' p='Use decentralization network of Defi Keeper nodes to automate contracts , mitigation risk of manual interventions and centralized servers'/>
        </div>
        <button className='mt-10 lg:w-[15%] btn-gradient p-5 rounded-full'>Use Defi</button>
    </div>
  )
}

export default About