import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import TrustedBy from './comp/TrustedBy'
import TopSection from './comp/TopSection' // ✅ Naam sahi kiya (FeatureSection hata diya)
import AwardsHeader from './comp/AwardsHeader'
import AwardSection from './comp/awardSection'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TopSection />
      <AwardsHeader/>
      <AwardSection/>
    </>
  )
}

export default App