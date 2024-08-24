import React from 'react'
import Navbar from '../Components/Navbar'
import UserForm from '../Components/UserForm'
import Footer from '../Components/Footer'

const UserDetailsPage = () => {
  return (
    <div className="px-6 py-4 font-Poppins space-y-4">
      <Navbar/>
      <UserForm/>
      <Footer/>
    </div>
  )
}

export default UserDetailsPage
