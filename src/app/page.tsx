import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skill";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}
