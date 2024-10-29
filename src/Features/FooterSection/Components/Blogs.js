import React from 'react'
import { blogList } from '../Constant/BlogTitles';

const Blogs = () => {
  return (
    <div className="mt-12 w-full flex flex-col items-center justify-center">
      <div className="section-title text-darky font-medium font-rubik py-10 text-4xl mb-0">
        WhyChoose
      </div>
      <div className="w-14 h-0.5 bg-sky-800 mx-auto"></div>
      <div className="w-9/12 flex items-center text-center mt-4 mb-6">
        {blogList.map((blog) => {
          return (
            <div
              key={blog.id}
              className={`${blog.id} flex flex-col gap-8 font-rubik cursor-pointer`}
            >
              
                <div className='text-sky-500 text-9xl'> {blog.logo} </div>
                 <div className='text-darky text-xl font-medium'>{blog.title}</div>
                 <div  className='text-slate-500 text-lg'>{blog.desc}</div>
          </div>
              
          
          );
        })}
      </div>
    </div>
  )
}

export default Blogs