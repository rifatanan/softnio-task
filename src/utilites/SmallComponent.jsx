import React from 'react'

const SmallComponent = ({icon, heading, paragraph}) => {
	
	return (
		<div className='flex justify-start'>
			<div className='h-[90px] w-[90px] shadow-md rounded-full text-3xl'>{icon}</div>
			<div className='grid grid-flow-row grid-rows-2 pl-5'>
				<h1 className="uppercase font-[700] text-[30px] leading-[36px] ">{heading}</h1>
				<p className='font-[400] text-[20px] leading-[32px]'>{paragraph}</p>
			</div>
		</div>
	)
}

export default SmallComponent
