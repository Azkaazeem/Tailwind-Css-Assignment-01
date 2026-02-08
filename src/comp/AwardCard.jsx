import React from 'react'

const AwardCard = ({
    image,
    bgColor,
    heading
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 m-10 rounded-lg w-full max-w-[290px] h-[270px] transition-transform hover:scale-105" style={{ backgroundColor: bgColor }}>
            <div className="mb-5">
                <img src={image} alt="Award Badge" className="h-24 w-auto object-contain"/>
            </div>

            <h3 className="text-gray-900 font-bold text-lg text-center leading-snug px-2">
                {heading}
            </h3>
        </div>
    )
}

export default AwardCard