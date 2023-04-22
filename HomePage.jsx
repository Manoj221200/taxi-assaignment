import React from 'react'
import Inquiry from '../../component/Inquiry/Inquiry'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <div className='bg'>
        <div className="h1">
          Taxi Inquiry Form
        </div>
        <Inquiry />
      </div>
    </>
  )
}
