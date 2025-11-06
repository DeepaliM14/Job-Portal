import React from 'react'
import { assets , jobsData } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const JobCard = ({ job }) => {
console.log("JOB DATA:", job);

    return(
        <div className='border p-6 shadow rounded'>
            <div className='flex justify-between items-center'>
                <img className='h-8' src={assets.company_icon} alt=""/>
            </div>
            <h4 className='font-medium text-xl mt-2'>{jobsData.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{jobsData.location}</span>
                <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{jobsData.level}</span>
            </div>
             <p
        className='text-gray-500 text-sm mt-4'
        dangerouslySetInnerHTML={{ __html: jobsData?.description ? jobsData.description.slice(0, 150) : "" }}
      ></p>
            <div>
                <button>Apply Now</button>
                <button>Learn more</button>
            </div>
        </div>
    )
}

export default JobCard;
