import About from "./about/About";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

// app/components/Greeting.js
export default function Landing() {
  return (
    <div>
      <div className="h-lvh">
        <Navbar />
        <Header />
      </div>
      <About />
    </div>
  );
}
