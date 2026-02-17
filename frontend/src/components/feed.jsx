import React, { useEffect } from 'react'
import Card from './card'
import { useDispatch, useSelector } from 'react-redux'
import { fetch } from '../api/postapi'
import { fetchPosts } from '../redux/features/postSlice'
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

    <div className='bg-gray-700 min-h-screen py-4 flex justify-center'>
      <div className='flex flex-wrap gap-3 w-[95vw]'>
        {[...posts].reverse().map((post) => (
          <Card key={post.id} elem={post} />
        ))}
      </div>
    </div>
  )
}

export default feed