import React, { useState } from 'react'
import { addPost } from '../api/postapi'
const post = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        try {
            let response = await addPost(formData);
            console.log(response);
            setSubmitted(true);
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setLoading(false);
        }
    }
    
    if (submitted) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4'>
                <div className='bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl text-center max-w-md w-full'>
                    <div className='w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h1 className='text-3xl font-bold mb-2 text-white'>Posted!</h1>
                    <p className='text-gray-400 mb-6'>Your post has been successfully shared.</p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setTitle('');
                            setImage(null);
                        }}
                        className='w-full bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-orange-900/20 active:scale-95'
                    >
                        Create Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4'>
            <div className='w-full max-w-md bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl'>
                <h1 className='text-3xl font-bold mb-8 text-white text-center bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent'>Create Post</h1>

                <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-400 ml-1'>Caption</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='What is on your mind?'
                            className='w-full p-4 bg-black/20 border border-white/10 rounded-xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 text-white placeholder-gray-600 transition-all'
                            required
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-400 ml-1'>Image</label>
                        <div className='relative'>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className='w-full p-3 bg-black/20 border border-white/10 rounded-xl outline-none text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500/10 file:text-orange-400 hover:file:bg-orange-500/20 transition-all cursor-pointer'
                                required
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='mt-4 w-full bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center'
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Share Post'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default post