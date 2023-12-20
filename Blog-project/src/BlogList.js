import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const blogs=props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) =>(
                <div className="blog-pre" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h4>Written by {blog.author}</h4>
                    </Link>
                </div> 
            ))}
        </div>
     );
}
 
export default BlogList;