import React, { Children } from 'react'
import Link from 'next/link'

const CustomLink = ({name, href}) => {
	return (
		<Link href={href} className='font-[500px] text-[15px] leading-[17.61px]'>{name}</Link>
	)
}

export default CustomLink
