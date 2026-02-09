import React from 'react'

const ArticleCard = ({ image, title, desc1, desc2, buttonText }) => {
  return (
    <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
      {/* Image Section */}
      <div className="mb-6 overflow-hidden rounded-md">
        <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {desc1}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {desc2}
        </p>

        {/* Button */}
        <button className="bg-[#12BCC4] hover:bg-[#0e9aa1] text-white font-bold py-2 px-6 rounded-sm text-sm transition-colors duration-300">
            {buttonText || "Read more"}
        </button>
      </div>
    </div>
  )
}

export default ArticleCard