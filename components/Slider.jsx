import Image from 'next/image';
import { SliderData } from './SliderData';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto pt-5'>
      <h1 className='text-2xl font-bold text-center p-4 pb-14'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
        {SliderData.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-1 ease-in duration-1000 h-[600px]'
                : 'opacity-0 h-[600px]'
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              size={40}
              className='absolute top-[50%] left-[30px] text-black/40 cursor-pointer select-none z-[2]'
            />
            {index === current && (
              <Image
                // width='1440'
                // height='600'
                style={{ objectFit: 'contain' }}
                fill
                src={slide.image}
                alt='/'
                loading='lazy'
              />
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              size={40}
              className='absolute top-[50%] right-[30px] text-black/40 cursor-pointer select-none z-[2]'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
