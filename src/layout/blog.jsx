import BlogCard from "../components/blogCard";

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="relative w-full max-w-8xl bg-white overflow-hidden">
        <div className="flex flex-col items-center py-10 px-4">
          <div className="w-full max-w-6xl bg-white overflow-hidden">
            {/* Başlık */}
            <div className="text-center mb-8">
              <h3 className="text-blue-500 font-bold text-2xl">
                Practice Advice
              </h3>
              <h3 className="text-gray-800 text-5xl mt-2 font-bold">
                Featured Posts
              </h3>
            </div>
          </div>

          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
