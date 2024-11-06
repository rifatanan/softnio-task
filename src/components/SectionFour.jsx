import React from 'react'
import spoon from '../../public/Image/spoon.png'
import Input from '@/utilites/Input'
import Button from '@/utilites/Button'

const SectionFour = () => {
  return (
	<div className='w-full h-[788px] flex justify-center items-center' style={{
		backgroundImage:`url(${spoon.src})`,
		backgroundRepeat:'no-repeat',
		backgroundSize: 'cover'
	}}>
		<div className='w-[1320px] h-[548px] '>
			<div className='w-1/2 h-full space-y-[40px] text-white '>
				<div className=''>
					<div className='flex text-[#BD1F17]'>
						<p className='font-[700] text-[20px] leading-[32px]'>Book Now</p>
					</div>
					<h1 className='uppercase font-[700] text-[62px] leading-[62px]'>Book Your table</h1>
					<p className='font-[400] text-[16px] leading-[24px]'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
				</div>
				<div className='space-y-2'>
					<div className='flex gap-x-2'>
					<Input placeholder="Your Name*"/>
					<Input placeholder="Your Email"/>
					</div>
					<div className='flex gap-x-2'>
						<Input placeholder="Reservation Date"/>
						<Input placeholder="Total People" />
					</div>
					<textarea placeholder="Message" className='h-[140px] w-full pl-2'/>
				</div>
				<div>
					<Button>Book Now</Button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default SectionFour
