import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Joblisting from '../components/Joblisting'
import JobCard from '../components/JobCard'
import { jobsData } from '../assets/assets' 


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Joblisting/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6'>
        {jobsData.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Home
