import React from 'react'
import FeatureSection from './FeatureSection' // ✅ Sahi Path (Same folder)
import img from '../assets/10.png'           // ✅ Sahi Path (Ek folder peeche)

const TopSection = () => {
  return (
    <FeatureSection
        tag="OUR PROMISE"
        heading="Tool build for people."
        text="Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom."
        primaryBtn="Get started free"
        image={img} 
    />
  )
}

export default TopSection