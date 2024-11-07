import React from 'react'
import burger from '../../public/Image/Section2/burger.png'
import Button from '@/utilites/Button'
import { CallIcon, CubeIcon, Ellipse10Icon, Ellipse11Icon, Ellipse9Icon, ProductIcon, RewordIcon } from '../../public/Image/icon';
import SmallComponent from '@/utilites/SmallComponent';

const SectionTwo = () => {
  	return (
		<div className='container flex items-center mx-auto mt-20 mb-20'>
			<div>
				<div className='grid grid-flow-col grid-cols-2 gap-[50px] pb-7'>
					<div className='text-white'>
						<div className={`h-[460px] w-full relative`} style={{
							backgroundImage: `url(${burger.src})`,
							backgroundSize: '200px 300px',
							backgroundRepeat:'no-repeat',
							backgroundSize: 'cover'
						}}>
							<div className='bg-white w-[240px] h-[140px] mt-[20px] ml-[20px] absolute rounded-md flex items-center'>
								<div className="relative flex items-center justify-center w-[100px] h-[100px]">
									<div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
										<Ellipse11Icon className="w-8 h-8 text-blue-500" />
									</div>
									<div className="absolute top-0 left-0 transform translate-x-1/4 translate-y-1/4">
										<Ellipse10Icon className="w-8 h-8 text-green-500" />
									</div>
									<div className="absolute top-0 left-0">
										<Ellipse9Icon className="w-8 h-8 text-red-500" />
									</div>
								</div>
								<div className='text-black font-[600]'>Market Experiences</div>
							</div>
						</div>
					</div>
					<div className='grid-flow-row grid-cols-4 space-y-[18px]'>
						<div className='flex gap-5 font-[500] text-[14px] leading-[12px]'>
							<p className='px-2 py-2 '>About</p>
							<p className='px-2 py-2 bg-red-500'>Experince</p>
							<p className='px-2 py-2 '>Contact</p>
						</div>
						<h1 className='font-[700] text-[62px] leading-[62px]'>Exceptional culinary experience and delicious food</h1>
						<p className='font-[400] text-[16px] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
						<div className='grid items-start grid-flow-col grid-cols-3'>
							<Button>About More</Button>
							<div className='flex'>
								<CallIcon className='text-[#BD1F17] '/>
								<p className='text-[18px] font-[700] whitespace-nowrap'>+88 3426 739 485</p>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-flow-col grid-cols-3 pt-10 sm:grid-rows-3 sm:grid-flow-row'>
					<SmallComponent icon={<CubeIcon/>} heading="first delivery" paragraph="Within 30 minites"/>
					<SmallComponent icon={<RewordIcon/>} heading="absolute dining" paragraph="Best buffet restaurant"/>
					<SmallComponent icon={<ProductIcon/>} heading="pickup delivery" paragraph="Grab your food order"/>
				</div>
			</div>
			{/* image */}
			<div>Image</div>
		</div>
  	)
}

export default SectionTwo
