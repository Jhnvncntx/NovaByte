import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <main>
      <Navbar />
      <div className="w-[100%] flex flex-col items-center justify-start">
        <Hero />
        <Services />
        <Work />
        <About />
        <Testimonials />
      </div>
    </main>
  );
}

export default App;
