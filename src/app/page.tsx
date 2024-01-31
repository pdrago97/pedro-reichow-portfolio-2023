import Footer from './components/Footer'
import HomeHero from './components/HomeHero'
import { ThemeProvider } from './context/themeProvider'; 


export default function Home() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-700 bg-gray-100">
        <HomeHero />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
