import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
const randomJobs = [1, 2,3];

function Browse() {
  return (
    <div>
    <Navbar />
    <div className='max-w-7xl mx-auto my-10'>
        {/* <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
            {
                allJobs.map((job) => {
                    return (
                        <Job key={job._id} job={job}/>
                    )
                })
            }
        </div> */}
         <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
            {
                randomJobs.map((item,index) => {
                    return (
                        <Job />
                    )
                })
            }
        </div>

    </div>
</div>
  )
}

export default Browse