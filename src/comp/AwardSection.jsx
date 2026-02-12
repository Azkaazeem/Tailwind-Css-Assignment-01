import React from 'react'
import AwardCard from './AwardCard'
import award1 from '../assets/11.png'
import award2 from '../assets/12.png'
import award3 from '../assets/13.png'
import award4 from '../assets/14.png'
import award5 from '../assets/15.png'
import award6 from '../assets/16.png'

const AwardSection = () => {
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-20 px-5 max-w-7xl mx-auto'>
        <AwardCard image={award1} heading="Market leader across 18 categories" bgColor="#fff5f8"/>
        <AwardCard image={award2} heading="Most loved SaaS tool in 2021" bgColor="#ffe1ed"/>
        <AwardCard image={award3} heading="Category leader in 2022" bgColor="#E0FFFF"/>
        <AwardCard image={award4} heading="Most recommended tool in 2021" bgColor="#F8F8FF"/>
        <AwardCard image={award5} heading="Champion in survey tool 2022" bgColor="#FFF8DC"/>
        <AwardCard image={award6} heading="Top performer spring 2021" bgColor="#FFE4E1"/>
    </div>
  )
}

export default AwardSection