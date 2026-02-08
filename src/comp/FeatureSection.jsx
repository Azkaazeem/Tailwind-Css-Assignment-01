import React from 'react'

const FeatureSection = ({ 
  tag,              // Upar wala chota blue text (Optional)
  heading,          // Main Heading
  subheading,       // Heading k neechy bold text (Optional)
  text,             // Paragraph
  primaryBtn,       // Blue Button text
  secondaryBtn,     // White Button text (Optional)
  image,            // Side wali image
  isReverse,        // Agar image Left pe chahiye to true karein
  testimonialData,   // Agar image k upar PayPal wala card dikhana h (Optional)
  bgColor
}) => {
  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Grid Layout: Mobile pe 1 column, Desktop pe 2 columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center`}>
          
          {/* === TEXT CONTENT SIDE === */}
          {/* order-last logic: Agar reverse true h, to text end me jayega (Desktop pr) */}
          <div className={`flex flex-col items-start ${isReverse ? 'md:order-last' : ''}`}>
            
            {/* 1. Tag (Agar hai to dikhao) */}
            {tag && (
              <span className="bg-cyan-50 text-cyan-500 text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                {tag}
              </span>
            )}

            {/* 2. Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {heading}
            </h2>

            {/* 3. Subheading (Agar hai to dikhao) */}
            {subheading && (
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {subheading}
              </h3>
            )}

            {/* 4. Paragraph */}
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              {text}
            </p>

            {/* 5. Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary Button (Hamesha hota h) */}
              <button className="px-6 py-3 bg-cyan-500 text-white font-bold rounded shadow hover:bg-cyan-600 transition">
                {primaryBtn}
              </button>

              {/* Secondary Button (Sirf tab dikhega jab prop pass hoga) */}
              {secondaryBtn && (
                <button className="px-6 py-3 border border-cyan-500 text-cyan-500 font-bold rounded hover:bg-cyan-50 transition">
                  {secondaryBtn}
                </button>
              )}
            </div>
          </div>

          {/* === IMAGE SIDE === */}
          <div className="relative">
            {/* Main Image */}
            <img 
              src={image} 
              alt="Feature" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />

            {/* TESTIMONIAL CARD OVERLAY (Sirf middle section k liye) */}
            {testimonialData && (
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-cyan-50 p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-cyan-500">
                 {/* Logo (e.g. PayPal) */}
                 {testimonialData.logo && (
                   <img src={testimonialData.logo} alt="Logo" className="h-6 mb-3" />
                 )}
                 <p className="text-gray-600 text-sm italic mb-4">"{testimonialData.quote}"</p>
                 <p className="text-gray-900 font-bold text-sm">{testimonialData.author}</p>
                 <p className="text-gray-500 text-xs">{testimonialData.role}</p>
              </div>
            )}
            
            {/* Play Button Overlay (Agar testimonial hai to play button b dikhao) */}
            {testimonialData && (
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                 </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureSection