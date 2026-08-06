import React, { useState, useEffect } from 'react';
import { Sidebar, Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Typography } from '@material-tailwind/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);
  const [apiError, setApiError] = useState(null); // API xatoligini saqlash uchun

  useEffect(() => {
    setVideos(null);
    setApiError(null); // Har safar kategoriya o'zgarganda xatoni tozalaydi
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {
        if (data && data.items) {
          setVideos(data.items);
        } else {
          setApiError("API-dan noto'g'ri ma'lumot keldi yoki kalit bloklangan.");
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setApiError(error.message || "Internet yoki API kalitida xatolik yuz berdi.");
      });
  }, [selectedCategory]);

  // Agar xatolik bo'lsa, oq sahifa emas, aniq xato matni chiqadi
  if (apiError) {
    return (
      <div className="p-20 text-center dark:bg-zinc-900 bg-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-red-500 text-2xl font-bold mb-4">⚠️ API bilan ulanishda xatolik!</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-2">
          Xatolik sababi: <span className="text-red-400 font-mono">{apiError}</span>
        </p>
        <p className="text-sm text-gray-500">
          Tavsiya: Loyihadagi <span className="font-bold text-blue-500">.env</span> faylini, undagi RapidAPI kalitini yoki kompyuterda internet/VPN yoqilganini tekshiring.
        </p>
      </div>
    );
  }

  // Ma'lumot kelguncha chiroyli matnli yuklanish oynasi
  if (!videos) {
    return (
      <div className="p-20 text-center dark:bg-zinc-900 bg-white min-h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-t-red-500 border-gray-300 rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Videolar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='dark:bg-black bg-white text-white flex md:flex-row flex-col'>
      <div>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='dark:bg-black bg-white max-w-full px-4'>
        <Typography className='dark:text-white text-black' variant='h2'>
          {selectedCategory} <span className='text-cherry'>videos</span>
        </Typography>
        <div className="mt-3 max-h-[82vh] overflow-y-auto">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
}
