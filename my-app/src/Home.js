import Blog from './Blog'
import LoadingBar from './LoadingBar'
import useFetch from './useFetch'
import './Home.css'

const Home = () => {

    const { data: blogs, isPending, error, setData } = useFetch('https://blogs-da7b1-default-rtdb.firebaseio.com/.json');

    const handleDelete = (id) => {

        for (let [key, value] of Object.entries(blogs)) {
            if (value.id === id) {
                fetch(`https://blogs-da7b1-default-rtdb.firebaseio.com/${key}.json`, { method: 'DELETE' });
            }
        }

        const newBlogs = Object.values(blogs).filter(blog => blog.id !== id);

        setData(newBlogs);

    }

    return (
        <div className="home-wrapper">
            <div className="home-container">
                {error && <div>{error}</div>}

                {isPending && <LoadingBar />}

                {blogs && <Blog blog={blogs} title="All blogs" handleDelete={handleDelete}/>}
            </div>
        </div>
    );
}
 
export default Home;
