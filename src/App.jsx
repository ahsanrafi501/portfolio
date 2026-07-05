import NavBar from "./components/NavBar"
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero"
import ShowcaseSection from './sections/ShowcaseSection';
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Hero ></Hero>
    <ShowcaseSection></ShowcaseSection>
    <ExperienceSection></ExperienceSection>
    <TechStack></TechStack>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App