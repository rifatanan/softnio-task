import React from 'react'
import burger from '../../public/Image/Section2/burger.png'
import call from '../../public/Image/call.png'
import Button from '@/utilites/Button'
import Image from 'next/image'
import {CubeIcon, Ellipse10Icon, Ellipse11Icon, Ellipse9Icon, ProductIcon, RewordIcon } from '../../public/Image/icon';
import SmallComponent from '@/utilites/SmallComponent';
import small from '../../public/Image/Ring/small.png'
import half from '../../public/Image/Ring/half.png'
import full from '../../public/Image/Ring/full.png'

const Test = () => {
	return (
		<div className='px-[30px] py-[32px] lg:px-[300px] lg:py-[120px] gap-[50px] space-y-[50px] lg:gap-[74px]'>
			<div className='grid gap-[48px] lg:gap-p[74px]'>
				<div className="w-full h-[756] lg:h-[460px] grid grid-flow-row md:grid-flow-col md:grid-cols-2 lg:grid-flow-col lg:grid-cols-2 gap-[32px]">
					<div className={`h-[460px] relative`} style={{
						backgroundImage: `url(${burger.src})`,
						backgroundRepeat:'no-repeat',
						backgroundSize: 'cover'
					}}>
					<div className='bg-[#FFFFFF] w-[129px] h-[73px] md:h-[136px] md:w-[214px] rounded-lg mt-[16px] ml-[12px] lg:mt-[20px] lg:ml-[20px] flex justify-center items-center'>
							<div className='w-[106px] h-[50px] lg:w-[197px] lg:h-[94px] flex gap-[10px] '>
								<div className='flex items-center justify-center w-full '>
									<div className="absolute md:top-[40px] md:left-[28px] w-[50px] h-[50px] md:w-[94px] md:h-[94px]">
										<Image src={full} height={0} width={0} alt='full' />
									</div>
									<div className="absolute top-[15px] left-[10px] md:top-[17px] md:left-[5px] transform translate-x-1/4 translate-y-1/4 w-[50px] h-[50px] md:w-[94px] md:h-[94px]">
										<Image src={half} height={0} width={0} alt='half' />
									</div>
									<div className="absolute top-[34px] left-[30px] md:top-[50px] md:left-[42px] transform -translate-x-1/4 -translate-y-1/4 w-[8px] h-[8px] md:w-[16px] md:h-[16px]">
										<Image src={small} height={0} width={0} alt='small'/>
									</div>
									<p className='font-[700] text-[#181818] text-[14px] lg:text-[26px] leading-[16px] lg:leading-[30px]'>50+</p>
								</div>
								<div className='w-full font-[600] text-[#181818] text-[8.5px] lg:text-[16px] leading-[12.5px] lg:leading-[23px] flex items-center'>Market Experience</div>
							</div>
						</div>
					</div>
					<div className='h-[478px] md:h-[402px] flex flex-col space-y-[32px] gap-[16px] md:gap-[16px] lg:gap-[32px]'>
						<div className='h-[398px] md:h-[624px] flex flex-col gap-[18px]'>
							<div className='flex flex-col gap-[32px]'>
								<div className='flex gap-[16px]'>
									<button className='font-[500] text-white text-[14px] leading-[24px] px-[16px] py-[6px] bg-[#B52B1D]'>About</button>
									<button className='font-[500] text-white text-[14px] leading-[24px] px-[16px] py-[6px] bg-[#B52B1D]'>Experience</button>
									<button className='font-[500] text-white text-[14px] leading-[24px] px-[16px] py-[6px] bg-[#B52B1D]'>Contact</button>
								</div>
								<div>
									<h1 className='uppercase font-Bebas_Neue font-[700] text-[40px] lg:text-[62px] leading-[48px] lg:leading-[62px]'>Exceptional culinary experience and delicious food</h1>
								</div>
							</div>
							<p className='font-roboto font-[400] h-auto text-[16px] leading-[26px] text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
						</div>
						<div className='flex gap-[16px] lg:gap-[32px]'>
							<Button>about more</Button>
							<div className='flex items-center justify-center'>
								<div className='w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] whitespace-nowrap'>
									<Image src={call} height={24} width={24} alt='cal'/>
								</div>
								<p className='font-roboto font-[700] text-[14px] lg:text-[18px] leading-[24px]'>+88 3426 739 485</p>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[274px] lg:h-[90px] grid lg:grid-flow-col lg:grid-cols-3 '>
					<SmallComponent icon={<CubeIcon/>} heading="first delivery" paragraph="Within 30 minites"/>
					<SmallComponent icon={<RewordIcon/>} heading="absolute dining" paragraph="Best buffet restaurant"/>
					<SmallComponent icon={<ProductIcon/>} heading="pickup delivery" paragraph="Grab your food order"/>
				</div>
			</div>
		</div>
	)
}

export default Test


/*
	<div className='bg-white w-[35%] h-[73px] md:w-[30.5%px] md:h-[140px] mt-[20px] ml-[15px] rounded-md flex items-center gap-5'>
		<div className="relative flex items-center justify-center w-[50px] h-[50px] md:w-full md:h-[94px] bg-red-400">
			<div className="absolute top-0 lg:left-[10px] w-[50px] h-[50px] md:w-[94px] md:h-[94px]">
				<Image src={full} height={0} width={0} alt='full' />
			</div>
			<div className="absolute lg:-top-[22px] lg:-left-[13px] transform translate-x-1/4 translate-y-1/4 w-[50px] h-[50px] md:w-[94px] md:h-[94px]">
				<Image src={half} height={0} width={0} alt='half' />
			</div>
			<div className="absolute top-[15px] left-[20px] transform -translate-x-1/4 -translate-y-1/4 w-[8px] h-[8px] md:w-[16px] md:h-[16px]">
				<Image src={small} height={0} width={0} alt='small'/>
			</div>
			<p>50+</p>
		</div>
		<div className="flex font-sans font-[600] pl-[20px] text-[8.5px] leading-[12.62px] lg:text-[16px] lg:leading-[23px] bg-green-300">Market 
		Experiences</div>
	</div>
*/