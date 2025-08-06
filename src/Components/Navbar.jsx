import React from 'react'

const Navbar = () => {
  return (
    <header>
    <nav className="flex items-center justify-between px-12 h-25 
    border-b-2 border-transparent
     focus:border-black 
     shadow-md focus:shadow-none
      transition-all duration-300">
      <h1 className="text-2xl">Student Dashboard</h1>
      <div className="hidden lg:block text-xl font-semibold">
        Home + Add Student
      </div>
      <div
        className="lg:hidden bg-white p-2 rounded-md border border-black w-15 h-10 flex items-center justify-center hover:border-black">
        <i className="fa-solid fa-bars fa-lg "></i>
      </div>
      <div>
        <button className="bg-transparent border rounded-lg px-3 py-2 hover:bg-black hover:text-white ">
          Your Profile
        </button>
      </div>
    </nav>
  </header>
  )
}

export default Navbar