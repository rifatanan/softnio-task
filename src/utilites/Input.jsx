import React from 'react'

const Input = ({placeholder,type}) => {
	return (
		<input
			type={type}
			className='w-full p-2 py-3 mb-3 text-black border-gray-100 border-none rounded outline-none appearance-none ring-1 focus:outline-none'
			placeholder={placeholder}
			required
		/>

	)
}

export default Input
