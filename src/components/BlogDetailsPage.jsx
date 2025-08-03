// src/pages/BlogDetailsPage.jsx
import { useParams, Link } from "react-router-dom";
import { blogs } from "./Blog";
import ReactMarkdown from "react-markdown";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="container py-5">Blog not found.</div>;

  return (

<>
      <div className="breadcrumb-container  " >
        <div className="breadcrumb-overlay">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Blogs</h1>
          </div>
        </div>
      </div>



    <div className="container blogdetails py-5">
      <h2>{blog.title}</h2>
      <p className="text-muted">{blog.date}</p>
      <div className="image-wrapper">
      <img src={blog.image2} className="img-fluid my-3" alt={blog.title} />

      </div>
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </div>
</>

  );
};

export default BlogDetailsPage;
