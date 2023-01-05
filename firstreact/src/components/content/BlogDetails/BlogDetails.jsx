import "./BlogDetails.css";
import BlogImage from "./BlogImage/BlogImage";
import BlogContents from "./BlogContents/BlogContents";

const BlogDetails = () => {
  return (
    <div className="BlogDetails">
      <BlogImage />
      <BlogContents />
    </div>
  );
};

export default BlogDetails;
