import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Joblisting = () => {

  const {isSearched , searchFilter ,setSearchFilter} = useContext(AppContext);
  return (
    <div>
    {/* Sidebar */}
    <div>
    {/* search Filter from Hero Component */}
    { isSearched && (searchFilter.title !== " " || searchFilter.location !== "") && (
        <>
        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
        <div className='mb-4 text-gray-600'>
        {searchFilter.title && (
          <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
          {searchFilter.title}
          <img onClick={ e => setSearchFilter(prev => ({...prev,title:""}))}
          </span>
      )}
      {searchFilter.location && (

      )}
    </div>
    </div>
  )
}

export default Joblisting
