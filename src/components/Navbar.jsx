import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nav from '../../public/Image/nav.png'
import Button from '@/utilites/Button'
import CustomLink from '@/utilites/CustomLink'

const Navbar = () => {
	return (
		<div className="flex items-center lg:justify-between justify-center w-full px-[20px] py-[30px] sm:px-[20px] md:py-[30px] lg:px-[300px] lg:py-[32px] h-[77px] lg:h-[108px] text-white">
			<Link href={'/'} className='flex items-center'>
				<Image src={nav} height={37} width={37} alt='nav' className='mr-2'/>
				<div className='w-[159px] h-[29px] flex'>
				<p className="font-['Poppins'] font-[600] text-[28.44px] leading-[28.44px]">Restau</p>
				<p className="font-['Poppins'] font-[400] text-[28.44px] leading-[28.44px]">rant</p>
				</div>
			</Link>
			<div className='md:flex space-x-5 ml-10 hidden lg:w-[1100px] justify-between items-center'>
				<div className='flex items-center justify-between w-[484px]'>
					<CustomLink name={"Home"} href={"/"}/>
					<CustomLink name={"About"} href={"/"}/>
					<CustomLink name={"Porfolio"} href={"/"}/>
					<CustomLink name={"Clients"} href={"/"}/>
					<CustomLink name={"Blog"} href={"/"}/>
					<CustomLink name={"Contact"} href={"/"}/>
				</div>
				<Button>book a table</Button>
			</div>
		</div>
	)
}

export default Navbar
