import React from 'react'

const FeatureHeader = () => {
    // Tab data
    const tabs = [
        { name: "Create", active: true, icon: <CreateIcon /> },
        { name: "Distribute", active: false, icon: <DistributeIcon /> },
        { name: "Collect", active: false, icon: <CollectIcon /> },
        { name: "Analyze", active: false, icon: <AnalyzeIcon /> },
    ];

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                {/* 1. Pill Tag */}
                <span className="bg-[#E0F7FA] text-[#00ACC1] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                    Built for people
                </span>

                {/* 2. Main Heading */}
                <h2 className="text-3xl md:text-5xl text-gray-900 text-center mb-16 leading-tight">
                    <span className="font-bold">Easy</span> for beginners. <span className="font-bold">Powerful</span> for experts.
                </h2>

                {/* 3. Navigation Tabs */}
                <div className="flex flex-wrap justify-center md:justify-between w-full border-b border-gray-200">
                    {tabs.map((tab, index) => (
                        <div 
                            key={index}
                            className={`flex items-center gap-2 pb-4 px-4 md:px-8 cursor-pointer transition-all duration-300 border-b-4 
                            ${tab.active 
                                ? "border-[#26C6DA] text-[#26C6DA]" 
                                : "border-transparent text-gray-300 hover:text-gray-400"
                            }`}
                        >
                            <div className={`w-5 h-5 md:w-6 md:h-6 ${tab.active ? "fill-current" : "fill-gray-300"}`}>
                                {tab.icon}
                            </div>
                            
                            <span className="font-semibold text-sm md:text-lg">
                                {tab.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 
// 👆 YEH BRACKET (}) MISSING THA, AB LAGA DIA HAI.

// --- Icons Components (SVG) ---

const CreateIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/></svg>
)

const DistributeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 15.31 8.04 15.81L15.12 19.92C15.06 20.14 15 20.37 15 20.61C15 22.48 16.34 24 18.21 24C20.08 24 21.42 22.48 21.42 20.61C21.42 18.74 19.89 16.08 18 16.08Z"/></svg>
)

const CollectIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19ZM12 17L17 12H13V9H11V12H7L12 17Z"/></svg>
)

const AnalyzeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"/></svg>
)

export default FeatureHeader