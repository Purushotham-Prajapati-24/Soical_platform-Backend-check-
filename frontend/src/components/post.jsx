import React, { useState } from 'react'
import { addPost } from '../api/postapi'
const post = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [Submitted, setSubmitted] = useState(false)

    const onSubmitHandler = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        let response = await addPost(formData)
        console.log(response)
        setSubmitted(true)
    }


    return (
        <div>
        {Submitted?<div className='h-full min-h-screen flex flex-col items-center justify-center bg-gray-700'>
            <h1 className='text-2xl font-bold mb-4 text-white'>Post Submited</h1>
            <button onClick={() => setSubmitted(false)} className='active:scale-95 tracking-wider bg-orange-600 p-2 rounded-md'>Post</button>
        </div>:<div className='h-full min-h-screen flex flex-col items-center justify-center bg-gray-700'>
            <h1 className='text-2xl font-bold mb-4 text-white'>Create Post</h1>
            <form onSubmit={(e) => {
                onSubmitHandler(e)

                setImage(null);
                setTitle('');


            }} className='flex flex-col gap-4'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 border-black border-2' required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='Content' className='p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 border-black border-2' required/>
                <button type='submit' className='active:scale-95 tracking-wider bg-orange-600 p-2 rounded-md'>Post</button>
            </form>
        </div>}
        </div>
    )
}

export default post