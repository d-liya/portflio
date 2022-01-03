import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-1 bg-sky-500 min-h-screen font-sans">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
