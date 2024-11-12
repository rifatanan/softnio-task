import React from 'react'

const Input = ({name,type,placeholder}) => {
	return (
		<input
			name={name}
			type={type}
			placeholder={placeholder}
			className='w-full px-[16px] py-[12px] font-roboto font-[400] text-[14px] leading-[22px] focus:outline-none border-[1px] bg-transparent'
			required
		/>
	)
}

export default Input
