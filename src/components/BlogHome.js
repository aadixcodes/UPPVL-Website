// src/pages/BlogHome.jsx
import BlogCard from "../components/BlogCard";
import { blogs } from "./Blog";
import  lineabstract from "../line-abstract.svg";

const BlogHome = () => (
<>
   

  <div className="container py-5">
   <h2 className="partner text-center mb-5">
        OUR BLOGS
      </h2>    <div className="row">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </div>
</>
);

export default BlogHome;
