import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection";
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
    </>
  )
}

export default App