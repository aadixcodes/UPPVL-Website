// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => (
  <div className="col-md-4 mb-4">
    <div className="card  h-100 shadow-sm" id="blogcard">
       <Link to={`/blog/${blog.id}`} >
       <img src={blog.image} className="card-img-top" alt={blog.title} />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
       
      </div>
        </Link>

    </div>
  </div>
);

export default BlogCard;
