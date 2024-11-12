import React from 'react'
import { LeftArrow, RectangleIcon, RightArrow } from '../../public/Image/icon'

const Side = () => {
	return (
		<div className='items-center justify-between hidden lg:w-[152px] h-[60px] md:flex md:visible'>
			<button className='flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full shadow-md'><LeftArrow /></button>
			<button className='flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full shadow-md'><RightArrow /></button>
		</div>
	)
}

export default Side
