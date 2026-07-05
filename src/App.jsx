import NavBar from "./components/NavBar.jsx"
import Contact from "./sections/Contact.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Footer from "./sections/Footer.jsx"
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import TechStack from "./sections/TechStack.jsx";

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