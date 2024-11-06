import Image from 'next/image'
import React from 'react'
import heroImage from '../../public/Image/Restaurant/heroImage.png'
import flower from '../../public/Image/Restaurant/flower.png'
import Button from '@/utilites/Button'

const SectionOne = () => {
  return (
	<div className='flex items-center justify-center'>
		<div className='flex items-center justify-center w-[1373px] h-[650px]  relative'>
		<div className='flex' >
			<div className='w-1/2 text-white'>
				<div>
					<p className='text-[100px] inline'>Taste the authentic</p>
					<p className='text-[100px]'>Saudi cuisine</p>
				</div>
				<p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
				<Button>EXPLORE MENU</Button>
			</div>
			<div className='relative w-1/2 h-full '>
				<Image src={heroImage} height={200} width={600} alt='hero-image'className=''></Image>
				<div className='absolute bottom-0 right-0 h-[105px] w-[105px] flex rounded-full items-center justify-center bg-yellow-400'>
					<div className='block'>Today</div>
					<div className='inline'>Offer</div>
				</div>
			</div>
		</div>
		<div className='top-0 right-0 absulate'>
			<Image src={flower} height={30} width={30} alt='flower'></Image>
		</div>
	</div>
	</div>
  )
}

export default SectionOne
