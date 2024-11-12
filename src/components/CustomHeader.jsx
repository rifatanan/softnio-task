import React from 'react'
import { LeftArrow, RectangleIcon, RightArrow } from '../../public/Image/icon'
import Side from './Side'

const CustomHeader = ({header}) => {
	return (
		<div className='w-full h-[110px] flex items-center'>
			<div className='w-11/12 '>
				<div className='flex items-center'>
					<RectangleIcon/>
					<p className='text-[#BD1F17] pl-[10px] font-[700] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]'>Crispy, Every Bite Taste</p>
				</div>
				<p className='uppercase font-[700] font-Bebas_Neue text-[40px] leading-[48px] lg:text-[62px] lg:leading-[62px]'>{header}</p>
			</div>
			<Side/>
		</div>
	)
}

export default CustomHeader
