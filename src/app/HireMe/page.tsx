import Footer from '../components/Footer'
import HireMeHero from '../components/HireMeHero'
import { ThemeProvider } from '../context/themeProvider'; 

export default function Home() {
  return (
    <ThemeProvider>
    <div className="dark:bg-gray-700 bg-gray-100">
      <HireMeHero />
      <Footer />
    </div>
    </ThemeProvider>
  )
}
