import Navbar from './comp/Navbar'
import Hero from './comp/Hero'
import TrustedBy from './comp/TrustedBy'
import TopSection from './comp/TopSection' // ✅ Naam sahi kiya (FeatureSection hata diya)
import AwardsHeader from './comp/AwardsHeader'
import AwardSection from './comp/awardSection'
import FeatureHeader from './comp/FeatureHeader'
import FeatureSection from './comp/FeatureSection'
import img1 from './assets/7.png';
import img2 from './assets/8.png';
import img3 from './assets/9.png';
import CardHeader from './comp/CardHeader'
import ArticleSection from './comp/ArticleSection'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TopSection />
      <AwardsHeader />
      <AwardSection />
      <FeatureHeader />
      <FeatureSection
        tag="Create"
        heading="Create"
        subheading="Advanced research software"
        text="Ask the right questions and get the answers you need with the most secure and collaborative survey platform."
        primaryBtn="Get started for free"
        image={img1} // Laptop image
        bgColor={"bg-[#E0F7FA]"}
      />
      <FeatureSection
        tag="Testimonials"
        heading="See how customers drive impact"
        text="I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
        primaryBtn="See case studies"
        image={img2} // Woman image
      />
      <FeatureSection
        heading="Looking for a solution for your business?"
        text="Check out Sogolytics enterprise feedback and experience management platform."
        primaryBtn="Learn more"
        secondaryBtn="Schedule a consultation" // <--- 2nd Button Add ho gya
        image={img3} // Typing image
      />
      <CardHeader/>
      <ArticleSection/>
      
    </>
  )
}

export default App