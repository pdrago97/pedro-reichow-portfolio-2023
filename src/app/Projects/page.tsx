import Footer from '../components/Footer'
import ProjectsHero from '../components/ProjectsHero'
import { ThemeProvider } from '../context/themeProvider'; 

export default function Home() {
  return (
    <ThemeProvider>
    <div className="dark:bg-gray-700 bg-gray-100 ">
      <ProjectsHero />
      <Footer />
    </div>
    </ThemeProvider>
  )
}
