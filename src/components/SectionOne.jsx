import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/Image/Restaurant/heroImage.png'
import Button from '@/utilites/Button'

const SectionOne = () => {
	return (
		<div className='px-4 py-8 lg:h-[940px] w-full lg:pt-[120px] lg:pb-[160px] lg:px-[300px]'>
			<div className='w-full h-auto lg:h-[650px] grid grid-cols-1 md:grid-cols-2 gap-0 relative items-center space-y-4'>
				<div className='space-y-4'>
					<div className='bg-gradient-to-r from-[#BD1F17] to-[#BD1F17] w-full lg:w-[830px]'>
						<p className='font-[700] font-Bebas_Neue text-[48px] leading-[56px] lg:text-[120px] lg:leading-[130px] whitespace-nowrap uppercase'>Taste the authentic</p>
						<p className='font-[700] font-Bebas_Neue text-[48px] leading-[56px] lg:text-[120px] lg:leading-[130px] whitespace-nowrap uppercase'>Saudi cuisine</p>
					</div>
					<p className='font-[400] font-roboto text-[16px] leading-[24px] lg:text-[24px] lg:leading-[32px]'>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
					<Button>EXPLORE MENU</Button>
				</div>
				<div className='w-full h-auto lg:w-[700px] lg:h-[650px] flex justify-center'>
					<Image 
						src={heroImage} 
						height={650} 
						width={700} 
						alt='hero-image' 
						className='bg-black h-[300px] w-[330px] lg:h-[650px] lg:w-[700px] scale-x-[-1]' 
					/>
					<div className='absolute bottom-2 right-6 md:bottom-0 md:right-0 lg:bottom-0 lg:right-0 w-[63px] h-[63px] lg:h-[120px] lg:w-[120px] rounded-full flex flex-col justify-center items-center bg-yellow-400'>
						<div className='flex flex-col justify-center items-center border-2 border-red-500 h-[105px] w-[105px] rounded-full border-dotted'>
							<p className='uppercase font-Bebas_Neue font-[700] text-[21px] leading-[21px] lg:text-[36px] lg:leading-[36px]'>Today</p>
							<p className='uppercase font-Bebas_Neue font-[700] text-[21px] leading-[21px] lg:text-[36px] lg:leading-[36px]'>Offer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionOne


/*
<div className='bg-gradient-to-r from-[#BD1F17] from-0%  to-[##BD1F17] to-70%'>
					<p className='font-[700] sm:text-[48px] sm:leading-[56px] lg:text-[120px] lg:leading-[130px]  inline whitespace-nowrap'>Taste the authentic</p>
					<p className='text-[100px] whitespace-nowrap'>Saudi cuisine</p>
				</div>
				
				<p className='whitespace-nowrap'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
				<Button>EXPLORE MENU</Button>
			</div>
			
			<div className='relative w-5/12 h-full '>
				<Image src={heroImage} height={200} width={600} alt='hero-image'className=''></Image>
				<div className='absolute bottom-0 right-0 h-[105px] w-[105px] flex rounded-full items-center justify-center bg-yellow-400'>
					<div className='block'>Today</div>
					<div className='inline'>Offer</div>
				</div>
			</div>
*/