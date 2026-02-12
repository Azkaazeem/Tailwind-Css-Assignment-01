import React from 'react'
import FeatureSection from './FeatureSection'
import img from '../assets/10.png'

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