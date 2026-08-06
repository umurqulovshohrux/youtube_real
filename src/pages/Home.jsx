import React, { useState, useEffect } from 'react';
import { Sidebar, Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Typography } from '@material-tailwind/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]); 
    fetchFromAPI(`search?q=${selectedCategory}`)
      .then(data => {
        if (data && data.items) {
          setVideos(data.items);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [selectedCategory]);

  return (
    <div className='dark:bg-black bg-white text-white flex md:flex-row flex-col min-h-screen'>
      <div>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='dark:bg-black bg-white max-w-full px-4 flex-1'>
        <Typography className='dark:text-white text-black mt-4' variant='h2'>
          {selectedCategory} <span className='text-cherry'>videos</span>
        </Typography>
        <div className="mt-3 max-h-[82vh] overflow-y-auto">
          {videos && videos.length > 0 ? (
            <Videos videos={videos} />
          ) : (
            <div className="flex flex-col items-center justify-center mt-20 gap-3">
              <div className="w-10 h-10 border-4 border-t-red-500 border-gray-300 rounded-full animate-spin"></div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">YouTube serveridan videolar yuklanmoqda...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
