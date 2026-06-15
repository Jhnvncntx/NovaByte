import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <div className="w-[100%] flex flex-col items-center justify-start">
        <Hero />
      </div>
    </main>
  );
}

export default App;
