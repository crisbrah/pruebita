import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Gatherings from './components/Gatherings'
import Ministries from './components/Ministries'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Gatherings />
        <Ministries />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
