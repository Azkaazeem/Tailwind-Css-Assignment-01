import FeatureSection from './comp/FeatureSection' // <--- Import
import img1 from './assets/7.png';
import img2 from './assets/8.png';
import img3 from './assets/9.png';



      {/* --- SECTION 1: CREATE --- */}
      <FeatureSection 
        tag="Create"
        heading="Create"
        subheading="Advanced research software"
        text="Ask the right questions and get the answers you need with the most secure and collaborative survey platform."
        primaryBtn="Get started for free"
        image= {img1} // Laptop image
        bgColor={"bg-[#E0F7FA]"}
      />

      {/* --- SECTION 2: TESTIMONIALS (Isme Card Add hoga) --- */}
      <FeatureSection 
        tag="Testimonials"
        heading="See how customers drive impact"
        text="I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
        primaryBtn="See case studies"
        image= {img2} // Woman image
      />

      {/* --- SECTION 3: SOLUTION (Isme 2 Buttons hain) --- */}
      <FeatureSection 
        heading="Looking for a solution for your business?"
        text="Check out Sogolytics enterprise feedback and experience management platform."
        primaryBtn="Learn more"
        secondaryBtn="Schedule a consultation" // <--- 2nd Button Add ho gya
        image= {img3} // Typing image
      />