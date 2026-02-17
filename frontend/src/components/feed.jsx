import React, { useEffect } from 'react'
import Card from './card'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../api/postApi'
import { fetchPosts } from '../redux/features/postSlice'
import { motion } from 'framer-motion'
const feed = () => {

  const { posts, loading, error } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    const getdata = async () => {
      let data = await fetch()
      dispatch(fetchPosts(data))
    }
    getdata()

  }, [])


  return (

    <div className='bg-gray-950 min-h-screen py-8 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {[...posts].reverse().map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card elem={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default feed