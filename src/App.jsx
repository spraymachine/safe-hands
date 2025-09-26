import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </Layout>
  )
}

export default App

