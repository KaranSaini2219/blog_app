import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

// 1. IMPORT THE STAR ICON DIRECTLY

const Header = () => {

  const {setInput, input}= useAppContext()
  const inputRef=useRef()

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
}

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New: AI feature integerated
          </p>
          <img src={assets.star_icon} className='w-2.5' alt="Star icon" />
        </div>
       <h1 className="relative w-fit mx-auto text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
  your own <span className="text-primary">blogging</span> <br />platform
 
</h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>this is your space to express and share your thoughts. keep sharing you life experience and help others to grow as well.</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto
  border border-gray-300 bg-white rounded overflow-hidden'>

          <input ref={inputRef} type="text" placeholder='Search for blogs' required
            className='w-full pl-4 outline-none' />

          <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5
    rounded hover:scale-105 transition-all cursor-pointer'>
            Search
          </button>

        </form>
      </div>
      <div className='text-center'>
    {
        input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
    }
</div>

    
    </div>
  )
}

export default Header