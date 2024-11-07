import React from 'react'

const Button = ({children}) => {
	return (
		<button className='bg-[#FEBF00] uppercase font-[700] text-[16px] leading-[24px] whitespace-nowrap' style={{
			paddingTop:'10px',
			paddingRight:'24px',
			paddingBottom:'10px',
			paddingLeft:'24px',
		}}>{children}</button>
	)
}

export default Button
