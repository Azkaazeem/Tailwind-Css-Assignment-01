// import React from 'react';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';



const TrustedBy = () => {
  return (
    <section className="bg-white w-full pt-32 md:pt-60 pb-16">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="flex justify-center mb-6">
            <span className="bg-cyan-50 text-cyan-500 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Our Customers
            </span>
        </div>

        <h2 className="text-3xl md:text-4xl text-gray-900 mb-12">
            Trusted by <span className="font-bold">100,000+ customers</span> in 90+ countries
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16 transition-all duration-500">

            <img src= {logo1} alt="Capgemini" className="h-8 md:h-10 w-auto object-contain" />
            <img src= {logo2} alt="Yamaha" className="h-8 md:h-10 w-auto object-contain" />
            <img src= {logo3} alt="Biocon" className="h-8 md:h-10 w-auto object-contain" />
            <img src= {logo4} alt="Dell" className="h-8 md:h-10 w-auto object-contain" />
            <img src= {logo5} alt="CK Birla" className="h-8 md:h-10 w-auto object-contain" />
            <img src= {logo6} alt="Shell" className="h-8 md:h-10 w-auto object-contain" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-gray-500 text-sm md:text-base font-medium">
            <StatItem count="18281" text="signed up last month" />
            <StatItem count="GDPR" text="- & CCPA-ready" highlight />
            <StatItem count="Leader@G2" text="Summer" highlight />
        </div>

      </div>
    </section>
  )
}

// Reusable Component for Bottom Stats
const StatItem = ({ count, text, highlight }) => (
    <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>
            <span className={`text-cyan-500 font-bold ${highlight ? '' : ''}`}>{count}</span> 
            {/* Logic: Agar text mein koi styling deni ho to wo yahan aayegi */}
             {' '}{text}
        </span>
    </div>
)

export default TrustedBy