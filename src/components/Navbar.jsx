import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import nav from '../../public/Image/nav.png'
import Button from '@/utilites/Button'

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-full px-4 py-2 sm:py-4 lg:px-[300px] lg:py-[32px] bg-gray-900">
			{/* Logo Section */}
			<div className="flex items-center gap-4 lg:gap-[60px] text-white">
				<Link href={'/'} className="flex items-center font-[Poppins]">
					<Image className="mr-1 sm:mr-[6px]" src={nav} height={37} width={37} alt="arrow" />
					<p className="font-[600] sm:text-[24px] text-[28.44px] leading-none">Restau</p>
					<p className="font-[400] sm:text-[24px] text-[28.44px] leading-none">rant</p>
				</Link>
			</div>

			{/* Navigation Links */}
			<div className="hidden md:flex gap-x-[10px] lg:gap-x-[40px] text-white font-[500] text-[14px] md:text-[15px]">
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/clients">Clients</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/contact">Contact</Link>
			</div>

			{/* Responsive Button */}
			<div className="block md:hidden">
				{/* Add a button or icon for mobile menu here if needed */}
				<Button>Menu</Button>
			</div>
		</div>
	)
}

export default Navbar
