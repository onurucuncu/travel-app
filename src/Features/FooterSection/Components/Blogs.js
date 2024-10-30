import React from "react";
import { blogList } from "../Constant/BlogTitles";

const Blogs = () => {
  return (
    <div className="mt-12 w-full flex flex-col items-center justify-center">
      <div className="section-title text-darky font-medium font-rubik py-10 text-4xl mb-0">
        WhyChoose
      </div>
      <div className="w-14 h-0.5 bg-sky-800 mx-auto"></div>
      <div className="w-10/12 flex justify-between items-center text-center mt-6 mb-6">
        {blogList.map((blog) => {
          const { id, logo, title, desc } = blog;
          return (
            <div
              key={blog.id}
              className={`${id} w-1/3 flex flex-col items-center justify-between gap-6 font-rubik cursor-pointer`}
            >
              <div className="text-sky-500 text-9xl"> {logo} </div>
              <div className="text-darky text-xl font-medium">{title}</div>
              <div className="text-slate-500 text-lg w-2/3 px-auto">{desc}</div>
            </div>
          );
        })}
      </div>
      <div className="footer w-full py-8 border-t-2 text-center text-slate-500 text-lg ">
        {" "}
        2024 TravelApp. All rights reserved by @onurucuncu61 and @szy39{" "}
      </div>
    </div>
  );
};

export default Blogs;
