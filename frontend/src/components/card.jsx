import React from 'react'

const card = (elem) => {
  return (
    <div className=' w-full sm:w-[48%] lg:w-[23%] md:h-[50vh] rounded-lg overflow-hidden bg-gray-900'>
        <h1 className='font-bold text-xl  text-white text-center py-2'>{elem.elem.title}</h1>
        <div className='h-[35vh]'><img src={elem.elem.image} alt="" className='h-full w-full object-center object-cover' /></div>
            
        <div className=' bg-gray-800 py-3'>
            <div className='flex gap-2 justify-between mx-4 '>
            <button className='bg-red-600 px-4 py-1 rounded-md  active:scale-95 text-gray-200'>Like</button>
            <button className='bg-orange-600 px-4 py-1 rounded-md  active:scale-95 text-gray-200'>Comment</button>
            <button className='bg-gray-700 px-4 py-1 rounded-md  active:scale-95 text-gray-200'>Share</button>
            </div>
        </div>      
    </div>
  )
}

export default card