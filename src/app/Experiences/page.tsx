import Footer from '../components/Footer'
import HeroExperiences from '../components/HeroExperiences'
import { ThemeProvider } from '../context/themeProvider'; 

export default function Home() {
  return (
    <ThemeProvider>
    <div className="dark:bg-gray-700 bg-gray-100 mt-[-100px]">
      <HeroExperiences />
      <Footer />
    </div>
    </ThemeProvider>
  )
}
