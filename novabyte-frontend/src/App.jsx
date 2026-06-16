import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <main>
      <Navbar />
      <div className="w-[100%] flex flex-col items-center justify-start">
        <Hero />
        <Services />
      </div>
    </main>
  );
}

export default App;
