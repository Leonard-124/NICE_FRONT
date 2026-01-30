// import { Images } from "../../../assets/images/images.ts"
// import React from "react";

// interface Images {
//     id: number;
//     image: string;
//     description: string;
//     author: string;
//     link: string
// }


// const Blogs: React.FC = () => {
    
//   return (
//     <div className=" h-[600px] w-full bg-[#f5f5f3]">
//       <div className="flex justify-center">
//     {Images.map((item) => (
//         <a href={item.link} key={item.id} className="h-[500px] w-[400px] m-4 border-[0.5px] border-gray-200 rounded-md shadow-md">
//             <img src={item.image} alt="" className="h-[300px] w-full object-cover"/>
//             <div className="text-xl font-light ">
//                 <p className="tracking-[-1.5px] text-gray-400 text-[16px]">{item.author}</p>
//             <p className="text-black font-bold tracking-[-0.5px] mt-2 ">{item.description}</p>
//             </div>
//         </a>
//     ))}
//       </div>
//     </div>
//   )
// }

// export default Blogs;

import { Images } from "../../../assets/images/images.ts"

interface Images {
    id: number;
    image: string;
    description: string;
    author: string;
    link: string
}



import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles on tech careers, frameworks, and personal growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Images.map((article, index) => (
            <BlogCard
              key={index}
              image={article.image}
              author={article.author}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;