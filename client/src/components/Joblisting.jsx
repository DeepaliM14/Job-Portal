import React, { useContext } from 'react';
import { assets, JobCategories } from './../assets/assets';
import { AppContext } from '../context/AppContext';
const Joblisting = () => {
const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);
return (
<div> 
  {/* Sidebar */}
  <div className='w-full lg:w-1/4 bg-white px-4'>
    {/* Search Filter from Hero Component */}
    {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
      <>
        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
        <div className='mb-4 text-gray-600'>
          {/* Title Filter */}
          {searchFilter.title && (
            <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>   
             {searchFilter.title}
              <img  onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))} 
              //src="/cross-icon.svg" 
              src={assets.cross_icon}
                alt='clear filter'
                className='cursor-pointer'
                 
              />
            </span>
          )}
          {/* Location Filter */}
          {searchFilter.location && (
            <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded ml-2'>
              {searchFilter.location}
               <img  onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))} 
                //src='/cross-icon.svg'
                 src={assets.cross_icon}
                alt='clear filter'
                className='cursor-pointer'
              />
           </span>
          )}
        </div>
      </>
    )}
    {/* Category Filter*/}
    <div className= "max-lg:hidden " >
      <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
      <ul className='space-y-4 text-gray-600'>{
        JobCategories.map((category,index)=>(
          <li className ='flex gap-3 items-center'key ={index}>
            <input className ='scale-125' type="checkbox" name="" id="" />
            {category}
          </li>
        ))
           }</ul>
    </div>
  </div>
</div>
);

};
export default Joblisting;