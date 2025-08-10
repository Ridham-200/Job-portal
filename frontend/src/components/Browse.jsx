import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(''));
    };
  }, [dispatch]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <h1 className="font-bold text-2xl text-gray-800 mb-8">
          Search Results <span className="text-gray-500">({allJobs.length})</span>
        </h1>

        {allJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allJobs.map((job) => (
              <Job key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center text-gray-500">
            No jobs found. Try adjusting your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
