import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import Navbar from './components/navbar'
import { MdAdd } from 'react-icons/md'



function App() {

  return (
    <>
    <Navbar />
    
    <div className="h-40 my-32 mb-0 justify-center flex items-center">
    <span className='text-md  text-pink-800 relative left-12 bottom-2 animate-bounce z-10 font-bold'>0.0.1</span>
    <img className='w-16 animate-waving-hand' src="/vite.svg" alt="vite"/>
      <h1 className='text-3xl font-bold  text-pink-600'>Wellcome to Vitewind</h1>
      <span className='text-xs  text-pink-400'>ACS</span>
    </div>

    <ul className='flex flex-col p-10'>
      <li className=' text-pink-700 text-lg font-medium'>Options</li>
      <li className='flex text-pink-600 text-md'><MdAdd className='text-2xl'/>React</li>
      <li className='flex text-pink-600 text-md'><MdAdd className='text-2xl'/>Vite</li>
      <li className='flex text-pink-600 text-md'><MdAdd className='text-2xl'/>Tilewind</li>
      <li className='flex text-pink-600 text-md'><MdAdd className='text-2xl'/>React icons</li>
      <li className='flex text-pink-600 text-md'><MdAdd className='text-2xl'/>Api options</li>
    </ul>
    
    </>
  )
}

export default App
