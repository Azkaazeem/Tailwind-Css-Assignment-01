import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import TrustedBy from './comp/TrustedBy'
import TopSection from './comp/topSection' // ✅ Naam sahi kiya (FeatureSection hata diya)
import AwardsHeader from './comp/awardsHeader'
import AwardsSection from './comp/awardSection'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TopSection />
      <AwardsHeader/>
      <AwardsSection/>
    </>
  )
}

export default App