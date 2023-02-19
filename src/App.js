import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <header className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hi, I'm Aneesh M Bhat
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I am a freelance developer with expertise in frontend development,
            backend development, and mobile app development.
          </p>
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
            View Projects
          </button>
        </div>
      </header>
      <About />
      <Footer />
    </div>
  );
}

export default App;
