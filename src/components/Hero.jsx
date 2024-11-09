import React from 'react'
import Navbar from './Navbar'
import SectionOne from './SectionOne'
import naranjas from '../../public/Image/Restaurant/naranjas.png'
import Footer from './Footer'
import SectionTwo from './SectionTwo'

const Hero = () => {
	return (
		<div className="w-full sm:w-full" style={{
			backgroundImage:`url(${naranjas.src})`,
			backgroundRepeat:'repeat',
			backgroundSize: '150px 150px'
		}}>
			<div className='sm:w-full w-full h-[715px] lg:h-[1047px] bg-gradient-to-r from-[#BD1F17] from-40.8% via-[#A61D13] via-76.4% to-[#8E1B0F] to-120.69% opacity-90'>
				<Navbar />
				<SectionOne />
			</div>
		</div>
  	)
}

export default Hero
