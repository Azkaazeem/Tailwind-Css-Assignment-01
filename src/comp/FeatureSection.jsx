import React from 'react'

const FeatureSection = ({ 
  tag,
  heading,
  subheading,
  text,
  primaryBtn,
  secondaryBtn,
  image,
  isReverse,
  testimonialData,
  bgColor
}) => {
  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center`}>
          
          <div className={`flex flex-col items-start ${isReverse ? 'md:order-last' : ''}`}>
            
            {tag && (
              <span className="bg-cyan-50 text-cyan-500 text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                {tag}
              </span>
            )}

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {heading}
            </h2>

            {subheading && (
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {subheading}
              </h3>
            )}

            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              {text}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-cyan-500 text-white font-bold rounded shadow hover:bg-cyan-600 transition">
                {primaryBtn}
              </button>

              {secondaryBtn && (
                <button className="px-6 py-3 border border-cyan-500 text-cyan-500 font-bold rounded hover:bg-cyan-50 transition">
                  {secondaryBtn}
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <img 
              src={image} 
              alt="Feature" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />

            {testimonialData && (
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-cyan-50 p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-cyan-500">
                 {testimonialData.logo && (
                   <img src={testimonialData.logo} alt="Logo" className="h-6 mb-3" />
                 )}
                 <p className="text-gray-600 text-sm italic mb-4">"{testimonialData.quote}"</p>
                 <p className="text-gray-900 font-bold text-sm">{testimonialData.author}</p>
                 <p className="text-gray-500 text-xs">{testimonialData.role}</p>
              </div>
            )}
            
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