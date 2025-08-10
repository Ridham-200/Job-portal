import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-blue-50">
        <HeroSection />
      </div>

      {/* Category Carousel */}
      <div className="bg-white">
        <CategoryCarousel />
      </div>

      {/* Latest Jobs */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <LatestJobs />
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  )
}

export default Home
