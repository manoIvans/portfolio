import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  )
}

export default App
