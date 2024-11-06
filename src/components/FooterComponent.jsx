import React from 'react'
import { ClockIcon } from '../../public/Image/icon'
import Image from 'next/image'
import Clock from '../../public/Image/clock.png'

const FooterComponent = ({picture,heading,peragraphOne,peragraphTwo}) => {
  return (
	<div className='space-y-[36px] text-white'>
	  <div className='flex justify-center'>
		<Image src={picture} height={30} width={30} alt='Clock'/>
	  </div>
	  <div className=''>
		<h1 className='flex justify-center uppercase font-[700] text-[24px] leading-[28px]'>{heading}</h1>
		<p className='flex justify-center font-[400] text-[16px] leading-[25px]'>{peragraphOne}</p>
		<p className='flex justify-center font-[400] text-[16px] leading-[25px]'>{peragraphTwo}</p>
	  </div>
	</div>
  )
}

export default FooterComponent
