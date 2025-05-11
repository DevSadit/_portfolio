import Footer from "./Footer/Footer";
import Header from "./header/Header";
import My_Journey from "./my_journey/My_Journey";
import Navbar from "./navbar/Navbar";
import Projects from "./Projects/Projects";
import TechStack from "./TechStack/TechStack";

// app/components/Greeting.js
export default function Landing() {
  return (
    <div>
      <div className="h-lvh">
        <Navbar />
        <Header />
      </div>
      <div>
        <My_Journey />
      </div>
      <div className="mt-20">
        <TechStack />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
