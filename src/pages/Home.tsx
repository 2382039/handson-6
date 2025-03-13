import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-white text-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg mb-6"> Explore a variety of the best products here!</p>
        <button 
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          onClick={() => navigate("/product")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
