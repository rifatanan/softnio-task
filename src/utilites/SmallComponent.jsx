import React from 'react'

const SmallComponent = ({icon, heading, paragraph}) => {
	
	return (
		<div className='flex items-center gap-[16px] '>
			<div className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex justify-center items-center shadow-md rounded-full '>{icon}</div>
			<div className='grid grid-flow-row grid-rows-2 gap-[2px]'>
				<p className="font-Bebas_Neue font-[700] text-[24px] md:text-[30px] whitespace-nowrap leading-[36px] text-[#0A1425]">{heading}</p>
				<p className='font-roboto font-[400] text-[20px] leading-[32px] tracking-[minus-1.5]'>{paragraph}</p>
			</div>
		</div>
	)
}

export default SmallComponent
