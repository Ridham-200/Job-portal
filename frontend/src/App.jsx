
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />},

    {
          path: "/jobs",
          element: <Jobs />
        
  },
  {
        path: "/browse",
        element: <Browse />
      },
      {
            path: "/profile",
            element: <Profile />
          },
          {
                path: "/description/:id",
                element: <JobDescription />
              },

])

  function App() {

    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    )
  }
  
  export default App
// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />
//   },
//   {
//     path: "/description/:id",
//     element: <JobDescription />
//   },
//   {
//     path: "/browse",
//     element: <Browse />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   },
//   // admin ke liye yha se start hoga
//   {
//     path:"/admin/companies",
//     element: <ProtectedRoute><Companies/></ProtectedRoute>
//   },
//   {
//     path:"/admin/companies/create",
//     element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/companies/:id",
//     element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs",
//     element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs/create",
//     element:<ProtectedRoute><PostJob/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs/:id/applicants",
//     element:<ProtectedRoute><Applicants/></ProtectedRoute> 
//   },

// ])

