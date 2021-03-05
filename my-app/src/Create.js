import { useState } from 'react';
import uuid from 'react-uuid';
import './Create.css'

const Create = () => {

    const [blog, setBlog] = useState(
        {
            author: '',
            body: '',
            id: '',
            title: ''
        }
    );
    
    const createBlog = () => {
        
        const newId = uuid();

        fetch('https://blogs-da7b1-default-rtdb.firebaseio.com/.json', {
            method: 'POST',
            body: JSON.stringify({
                author: blog.author,
                body: blog.body,
                id: newId,
                title: blog.title
            })
        })

    }

    return (
        <div className="create">
            <h2 className="title">Add a New Blog</h2>

            <div className="blog-container">
                <form action="">
                    <label htmlFor="title">Title:</label>
                    <input onChange={e => setBlog({...blog, title: e.target.value})} type="text" name="title" id="title"/>

                    <label htmlFor="body">Body:</label>
                    <input onChange={e => setBlog({...blog, body: e.target.value})} type="text" name="body" id="body"/>

                    <label htmlFor="author">Author:</label>
                    <input onChange={e => setBlog({...blog, author: e.target.value})} type="text" name="author" id="author"/>
                </form>

                <button onClick={createBlog} className="create-blog-btn">Create Blog</button>
            </div>
        </div>
    );
}
 
export default Create;