import React from 'react'
import CustomHeader from './CustomHeader'
import Image from 'next/image'
import person from '../../public/Image/person.png'
import videoImage from '../../public/Image/videoImage.png'
import play from '../../public/Image/play.png'

const SectionFive = () => {
	return (
		<div className='flex items-center justify-center w-full h-[965px] bg-white '>
			<div className='space-y-[60px]'>
				<div className='w-[1320px] h-[110px]'>
					<CustomHeader header={"What Some of my Customers Say"}/>
				</div>
				<div className='w-[1320px] h-[556px]  flex'>
					<div className='w-[556px] bg-[#FEBF00] flex justify-center items-center'>
						<div className='w-[386px] h-[412px]  flex'>
							<div className='font-[400] text-[60px] leading-[76px]'>“</div>
							<div className='space-y-[214px] pt-2'>
								<div className='font-400] text-[20px] leading-[34px]'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</div>
								<div>
									<div className='flex justify-between'>
										<div>
											<h1 className='font-[700] text-[18px] leading-[20px]'>Khalid Al Dawsry</h1>
											<p className='font-[400] text-[14px] leading-[14px]'>Jeddah, Saudi</p>
										</div>
										<div className='rounded-full h-[40px] w-[40px] overflow-hidden flex items-center justify-center'>
											<Image src={person} height={10} width={40} alt='Person' />
										</div>
									</div>
									<div>b</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[763px] flex justify-center items-center' style={{
						backgroundImage:`url(${videoImage.src})`,
						backgroundRepeat:'no-repeat',
						backgroundSize: 'cover'
					}}>
						<div className='h-[50px] w-[50px]'>
							<Image src={play} height={50} width={50} alt='Play'/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionFive
