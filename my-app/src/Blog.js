import './Blog.css'

function Blog({blog, title, handleDelete}) {

    const arr = Object.values(blog);

    return (
        <div className="blog-wrapper">
            <h1 className="blog-name">{title}</h1>
            {arr.map(blog => 
            <div className="wrapper" style={{display: 'block'}} key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                <h3>{blog.author}</h3>
                <button className="delete-blog" onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default Blog;