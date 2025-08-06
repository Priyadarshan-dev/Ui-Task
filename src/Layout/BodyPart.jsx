import React from 'react'

const BodyPart = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 px-4'>
      <button className="bg-black border rounded-2xl h-20 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-4/5 text-white text-2xl font-bold transform transition-all hover:translate-y-2 shadow-md duration-300">
        Student Profile
      </button>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6'>
        
        <div className='bg-transparent border rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3'>NAME : GANGADHARAN</div>
              <div className='border-b pb-3 '>ROLL NUMBER : 306</div>
              <div className='border-b pb-3 '>CLASS : 12th Standard</div>
              <div className='border-b pb-3 '>SECTION : C</div>
              <div className='border-b pb-3'>BLOOD GROUP : B+</div>
              <div >DOB : 05/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : CHANDRU</div>
              <div className='border-b pb-3 '>ROLL NUMBER : 305</div>
              <div className='border-b pb-3 '>CLASS : 12th Standard</div>
              <div className='border-b pb-3 '>SECTION : A</div>
              <div className='border-b pb-3'>BLOOD GROUP : A</div>
              <div >DOB : 24/03/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : RAMESH </div>
              <div className='border-b pb-3 '>ROLL NUMBER : 1</div>
              <div className='border-b pb-3 '>CLASS : X STANDARD</div>
              <div className='border-b pb-3 '>SECTION : A</div>
              <div className='border-b pb-3'>BLOOD GROUP : A+</div>
              <div >DOB : 09/03/1980</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : RAJ kUMAR</div>
              <div className='border-b pb-3 '>ROLL NUMBER : 307</div>
              <div className='border-b pb-3 '>CLASS : 12th Standard</div>
              <div className='border-b pb-3 '>SECTION : C</div>
              <div className='border-b pb-3'>BLOOD GROUP : A</div>
              <div >DOB : 02/05/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20  w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : VICKY</div>
              <div className='border-b pb-3 '>ROLL NUMBER : 308</div>
              <div className='border-b pb-3 '>CLASS : 12th Standard</div>
              <div className='border-b pb-3 '>SECTION : A</div>
              <div className='border-b pb-3'>BLOOD GROUP : B+</div>
              <div >DOB : 05/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : GANGADHARAN</div>
              <div className='border-b pb-3 '>ROLL NUMBER : 309</div>
              <div className='border-b pb-3 '>CLASS : 12th Standard</div>
              <div className='border-b pb-3 '>SECTION : A</div>
              <div className='border-b pb-3'>BLOOD GROUP : B</div>
              <div >DOB : 02/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME :</div>
              <div className='border-b pb-3 '>ROLL NUMBER :</div>
              <div className='border-b pb-3 '>CLASS :</div>
              <div className='border-b pb-3 '>SECTION : </div>
              <div className='border-b pb-3'>BLOOD GROUP : </div>
              <div >DOB : 05/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : </div>
              <div className='border-b pb-3 '>ROLL NUMBER : </div>
              <div className='border-b pb-3 '>CLASS :</div>
              <div className='border-b pb-3 '>SECTION : </div>
              <div className='border-b pb-3'>BLOOD GROUP : </div>
              <div >DOB : 05/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className='bg-transparent border py rounded overflow-hidden mt-20 w-full sm:w-50 md:w-60 lg:w-70 xl:w-80 transform transition-all hover:translate-y-2 shadow-lg duration-300'>
          <div>
            <img src="images/male-student.png" alt="Student" className='w-full h-50 sm:h-48 object-contain rounded-t-md mt-3' />
            <div className='m-4 space-y-3'>
              <div className='border-b pb-3 '>NAME : </div>
              <div className='border-b pb-3 '>ROLL NUMBER : </div>
              <div className='border-b pb-3 '>CLASS : </div>
              <div className='border-b pb-3 '>SECTION :</div>
              <div className='border-b pb-3'>BLOOD GROUP :</div>
              <div >DOB : 05/08/2001</div>
            </div>
            <div className='m-4'>
              <button className="border border-red-400 rounded-lg h-10 w-full hover:bg-red-400 hover:text-white block mt-3">
                Delete
              </button>
            </div>
            <div className='m-4'>
              <button className="bg-black border rounded-lg h-10 w-full text-white hover:bg-gray-800">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyPart
