import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = UseFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
    </div>
  );
};

export default Home;
