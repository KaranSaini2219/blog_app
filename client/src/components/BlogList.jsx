import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
console.log("categories:", blogCategories)
import {motion} from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'


const BlogList = () => {

  const [menu, setMenu] = useState('All')
  const {blogs,input}=useAppContext()

  const filteredBlogs=()=>{
    if(input==='')
    {
      return blogs
    }
    return blogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-10 my-10 relative'>
        {blogCategories.map((item) => (
          

<button
  key={item}
  onClick={() => setMenu(item)}
  className={`relative px-4 py-1 rounded-full transition-all
    ${menu === item ? 'text-white' : 'text-gray-500'}`}
>
  {menu === item && (
    <motion.div
      layoutId="underline"
      className="absolute inset-0 bg-primary rounded-full -z-10"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )}

  {item}
</button>

 
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8
      mb-24 mx-8 sm:mx-16 xl:mx-40'>
              {filteredBlogs().filter((blog)=>menu==="All"?true:blog.category===menu).map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}

      </div>

    </div>
  )
}

export default BlogList
