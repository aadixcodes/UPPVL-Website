// src/pages/BlogGridPage.jsx
import BlogCard from "../components/BlogCard";
import { blogs } from "./Blog";

const BlogGridPage = () => (
<>
     <div className="breadcrumb-container  " >
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Blogs</h1>
          </div>
        </div>
      </div>
  <div className="container py-5">
    <div className="row">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </div>
</>
);

export default BlogGridPage;
