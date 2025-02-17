'use client'

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'


function SliderSection() {
  const slides = [
    {
      url: 'https://4defevereiro.co.ao/wp-content/uploads/2023/03/cms-image-000037095.jpg',
    },
    {
      url: 'https://4defevereiro.co.ao/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-10-at-11.45.56-2.jpeg',
    },
    {
      url: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iofzrpQb1Bmg/v1/2000x1333.jpg',
    },

    {
      url: 'https://pbs.twimg.com/media/F-kmrfbXQAAcak7?format=jpg&name=large',
    },
    {
      url: 'https://pbs.twimg.com/media/F-kmp1UWIAAiBkh?format=jpg&name=large',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
 }

  return (
        <div className="max-w[1400px] h-[880px] w-full m-auto py-16 px-4 relative group">
            <div 
              style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
              className='w-full h-full rounded-0xl bg-center bg-cover duration-1000'
              ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                  </div>
                ))} 
            </div>
         </div>
  );
}

export default SliderSection