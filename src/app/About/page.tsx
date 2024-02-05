import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import { ThemeProvider } from '../context/themeProvider'; 


export default function Home() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-700 bg-gray-100">
        <AboutHero />
        <Footer />
      </div>
    </ThemeProvider>

  )
}
