import React from 'react'
import { LeftArrow, RectangleIcon, RightArrow } from '../../public/Image/icon'

const CustomHeader = ({header}) => {
	return (
		<div className='w-full h-[110px] flex'>
			<div className='w-11/12 '>
				<div className='flex items-center'>
					<RectangleIcon/>
					<p className='text-[#BD1F17] pl-[10px] font-[700] text-[20px] leading-[32px]'>Crispy, Every Bite Taste</p>
					</div>
				<p className='uppercase font-[700] text-[62px] leading-[62px]'>{header}</p>
			</div>
			<div className='flex items-center justify-between w-1/12 space-x-2'>
				<button className='flex items-center justify-center w-1/2 bg-white rounded-full shadow-md h-1/2'>
					< LeftArrow />
				</button>
				<button className='flex items-center justify-center w-1/2 bg-white rounded-full shadow-md h-1/2'><RightArrow /></button>
			</div>
		</div>
	)
}

export default CustomHeader
