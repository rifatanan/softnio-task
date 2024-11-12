import React from 'react'
import { LeftArrow, RectangleIcon, RightArrow } from '../../public/Image/icon'
import FavouriteItem from './FavouriteItem'
import burger from '../../public/Image/burger.png'
import pizza from '../../public/Image/pizza.png'
import french from '../../public/Image/french.png'
import shrimp from '../../public/Image/shrimp.png'
import CustomHeader from './CustomHeader'
import Side from './Side'

const SectionThree = () => {
	return (
		<div className='h-[532px] md:w-full md:h-[710px] bg-[#FBF7F2] px-[30px] py-[32px] md:px-[300px] md:py-[120px]'>
			<div className='md:w-[1320px] h-[468px] md:h-[470px] flex flex-col gap-[30px] lg:gap-[60px]'>
				<div className='bg-red-400 h-[82px] lg:h-[110px]'>
					<CustomHeader header={"POPULAR FOOD ITEMS"}/>
				</div>
				<div className='h-[356px] lg:h-[300px] bg-red-400'>
					<div className='grid grid-flow-col grid-colss-4 gap-[32px]'>
						<FavouriteItem itemName={"vegetables burger"} pic={burger } description={"Barbecue Italian cuisine pizza"}/>
						<FavouriteItem itemName={"Spacial Pizza"} pic={pizza } description={"Barbecue Italian cuisine pizza"}/>
						<FavouriteItem itemName={"Spacial French fries"} pic={french } description={"Barbecue Italian cuisine"}/>
						<FavouriteItem itemName={"Cuisine Chicken"} pic={shrimp } description={"Japanese Cuisine Chicken"}/>
					</div>
					<div className='visible bg-red-500 md:hidden'>
						<Side/>
					</div>
				</div>
			</div>
		</div>
	)	
}

export default SectionThree

/*
	<CustomHeader header={"POPULAR FOOD ITEMS"}/>
	<div className='grid justify-between grid-flow-col grid-cols-4 gap-[32px] mb-[50px]'>
		<FavouriteItem itemName={"vegetables burger"} pic={burger } description={"Barbecue Italian cuisine pizza"}/>
		<FavouriteItem itemName={"Spacial Pizza"} pic={pizza } description={"Barbecue Italian cuisine pizza"}/>
		<FavouriteItem itemName={"Spacial French fries"} pic={french } description={"Barbecue Italian cuisine"}/>
		<FavouriteItem itemName={"Cuisine Chicken"} pic={shrimp } description={"Japanese Cuisine Chicken"}/>
	</div>




	'use client'
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
import React, { useState, useEffect } from 'react';

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Left Arrow *
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        ◀
      </button>

      <div className="flex justify-center w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`${
                currentIndex === index ? "block" : "hidden lg:block"
              } min-w-full lg:min-w-1/4 p-4 box-border`}
            >
              {/* Each item 
              <div className="p-6 bg-gray-200 rounded-md">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow 
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-white bg-black bg-opacity-50 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default ResponsiveCarousel;


*/