'use client'
import React, { useEffect, useState } from 'react'
import spoon from '../../public/Image/spoon.png'
import Input from '@/utilites/Input'
import Button from '@/utilites/Button'
import { RectangleIcon } from '../../public/Image/icon'

const SectionFour = () => {
	const [backgroundSize, setBackgroundSize] = useState('cover')
	const [name, setName] =  useState(null);
	const [email, setEmail] =  useState(null);
	const [date, setDate] =  useState(null);
	const [total, setTotal] = useState(0);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const updateBackgroundSize = () => {
			if (window.innerWidth < 640) {
				setBackgroundSize('550px 722px')
			}
			else if (window.innerWidth < 1024) {
				setBackgroundSize('800px 722px')
			}
			else
			setBackgroundSize('cover')
		}

		updateBackgroundSize()
		window.addEventListener('resize', updateBackgroundSize)

		return () => window.removeEventListener('resize', updateBackgroundSize)
	}, [])

	const handleSubmit = async (e) =>{
		setName(null)
		setEmail(null)
		setDate(null)
		setTotal(null)
		setMessage('')
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const newTodo= {
			name  : data.get('name'),
			email : data.get('email'),
			date :data.get('date'),
			total: data.get('total'),
			message: data.get('message')
		}
		console.log('log: '+newTodo.name);
		console.log('log: '+newTodo.email);
		console.log('log: '+newTodo.date);
		console.log('log: '+newTodo.total);
		console.log('log: '+newTodo.message);
	}

	return (
		<div className='w-[390px] h-[722px] md:w-full md:h-[788px] flex justify-center items-center p-[20px] lg:px-[300px] lg:py-[120px] ' style={{
			backgroundImage:`url(${spoon.src})`,
			backgroundRepeat:'no-repeat',
			backgroundSize: backgroundSize,
		}}>
			<div className='flex w-full h-full '>
				<div className='w-full md:w-1/2 flex flex-col gap-[40px] text-white'>
					<div className='h-[162px] lg:h-[174px] md:w-[685px] gap-[8px] lg:gap-[16px]'>
						<div className='flex flex-col gap-[8px] lg:gap-[16px]'>
							<div className='flex items-center gap-[10px]'>
								<RectangleIcon/>
								<p className='text-[#BD1F17] font-[700] text-[16px] leading-[26px] lg:text-[20px] lg:leading-[32px]'>Book Now</p>
							</div>
							<p className='uppercase font-[700] font-Bebas_Neue text-[40px] leading-[48px] lg:text-[62px] lg:leading-[62px]'>Book Your Table</p>
						</div>number
						<p className='w-[330px] md:w-[545px] font-roboto font-[400] text-[16px] leading-[24px]'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
					</div>
					<form
						className='flex flex-col gap-[32px] lg:gap-[24px]'
						onSubmit={handleSubmit}
					>
						<div className='h-[388px] lg:h-[280px] flex flex-col gap-[16px] lg:gap-[24px]'>
							<div className='grid grid-flow-row  md:grid-cols-2 w-full gap-[16px] lg:gap-[30px]'>
								<Input 
									name='name'
									placeholder={"Your Name*"}
									type={"text"}
								/>
								<Input
									name='email'
									placeholder={"Your Email"}
									type={"text"}
								/>
							</div>
							<div className='grid grid-flow-row  md:grid-cols-2 gap-[16px] lg:gap-[30px] bg-transparent'>
								<Input 
									name='date'
									placeholder={"Reservation Date*"}
									type={'text'}
								/>
								<Input
									name='total'
									placeholder={"Total People"}
									type={"Number"}
								/>
							</div>
							<div className='h-[140px] border-[1px] '>
								<textarea
									name='message'
									placeholder='Message'
									className='w-full h-[140px] px-[16px] py-[12px] font-roboto font-[400] text-[14px] leading-[22px] focus:outline-none  bg-transparent'
								>
								</textarea>
							</div>
						</div>
						<div className='w-[123px] lg:w-[142px] text-black'>
							<Button>Book now</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SectionFour
