import React from 'react'

const card = ({ elem }) => {
  return (
    <div className='group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/10 hover:-translate-y-1 h-full flex flex-col'>
      <div className='relative aspect-square overflow-hidden'>
        <img
          src={elem.image}
          alt={elem.title}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60' />
      </div>

      <div className='p-5 flex flex-col flex-1'>
        <h2 className='text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-orange-400 transition-colors'>{elem.title}</h2>

        <div className='mt-auto pt-4 flex gap-2 w-full'>
          <button className='flex-1 bg-white/5 hover:bg-white/10 text-gray-300 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-1 group/btn'>
            <span>❤️</span> <span className='group-hover/btn:text-red-400 transition-colors'>Like</span>
          </button>
          <button className='flex-1 bg-white/5 hover:bg-white/10 text-gray-300 py-2 rounded-xl text-sm font-medium transition-colors'>
            Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default card