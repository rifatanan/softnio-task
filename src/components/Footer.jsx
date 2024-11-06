import React from 'react'
import footerImage from '../../public/Image/footerImage.png'
import FooterComponent from './FooterComponent'
import clock from '../../public/Image/clock.png'
import call from '../../public/Image/call.png'
import mail from '../../public/Image/mail.png'
import location from '../../public/Image/location.png'
import fb from '../../public/Image/fb.png'
import x from '../../public/Image/x.png'
import insta from '../../public/Image/insta.png'
import linkedin from '../../public/Image/linkedin.png'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
	return (
		<div className='h-[720px] w-[1920px] bg-black ' style={{
			backgroundImage:`url(${footerImage.src})`,
			backgroundRepeat:'no-repeat',
			backgroundSize: 'cover',
		}}>
			<div className='flex items-center justify-center w-full h-full bg-black opacity-80'>
				<div  className='h-[480px] w-[1320px] grid grid-flow-row grid-rows-2'>
					<div className='w-full h-auto space-y-[72px]'>
						<h1 className="font-[700] text-[64px] leading-[62px] text-white text-center whitespace-nowrap">We ready to have you the best dining experiences</h1>
						<div className='w-full  h-[144px] grid grid-flow-col grid-cols-4 gap-3'>
							<FooterComponent picture={clock} heading={"Opening hours"} peragraphOne={"Monday - Sunday"} peragraphTwo={"9:00 AM to 11:30 PM"} />
							<FooterComponent picture={call} heading={"LET'S TALK"} peragraphOne={"Phone: 1-800-222-4545"} peragraphTwo={"Fax: 1-800-222-4545"} />
							<FooterComponent picture={mail} heading={"BOOK A TABLE"} peragraphOne={"Email: demo@website.com"} peragraphTwo={"Support: support@website.com"} />
							<FooterComponent picture={location} heading={"Our Address"} peragraphOne={"123 Stree New York City , United"} peragraphTwo={"States Of America."} />
						</div>
					</div>
					<div className='grid items-end justify-center grid-flow-row text-white'>
						<div className='gap-[25px] space-y-[25px]'>
						<div className='flex justify-evenly w-[285px]'>
							<Link href={''} className='p-3 border-2 border-white rounded-full'><Image src={fb} height={24} width={24} alt='fb'/></Link>
							<Link href={''} className='p-3 border-2 border-white rounded-full '><Image src={x} height={20} width={20} alt='x'/></Link>
							<Link href={''} className='p-3 border-2 border-white rounded-full '><Image src={insta} height={24} width={24} alt='instagram'/></Link>
							<Link href={''} className='p-3 border-2 border-white rounded-full '><Image src={linkedin} height={24} width={24} alt='linkedIn'/></Link>
						</div>
						<div className='flex text-center'>
						© 2023 <p className='text-[#FEBF00] pl-1 pr-1'> Niomax </p> All Rights Reserved 
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
