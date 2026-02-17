import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../redux/features/postSlice';
const Navbar = () => {
    
    const tabs = [
        { path: '/', label: 'Feed' },
        { path: '/post', label: 'Post' },
    ];
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.post.activeTab)

    useEffect(()=>{
        dispatch(setActiveTab(window.location.pathname))
    },[window.location.pathname])




    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10 text-white flex justify-between items-center p-4 px-8 font-bold shadow-lg py-4'>
            <div className='text-3xl tracking-wide bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300 cursor-pointer '>
                Social Platform
            </div>

            <div className='flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10'>
                {tabs.map((tab) => (
                    <Link
                        key={tab.path}
                        to={tab.path}
                        className='relative px-6 py-2 rounded-full text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-orange-500'
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                        onClick={()=>dispatch(setActiveTab(tab.path))}
                    >
                        {activeTab === tab.path && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 transition-colors duration-200 ${activeTab === tab.path ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}>
                            {tab.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar