import React from 'react'
import { LeftArrow, RectangleIcon, RightArrow } from '../../public/Image/icon'
import FavouriteItem from './FavouriteItem'
import burger from '../../public/Image/burger.png'
import pizza from '../../public/Image/pizza.png'
import french from '../../public/Image/french.png'
import shrimp from '../../public/Image/shrimp.png'
import CustomHeader from './CustomHeader'

const SectionThree = () => {
	return (
		<div className='w-full h-screen bg-red-50  pr-[300px] pb-[120px] pl-[300px] flex justify-center items-center'>
			<div className='w-[1320px] h-[110px] space-y-[32px] '>
				<CustomHeader header={"POPULAR FOOD ITEMS"}/>
				<div className='grid justify-between grid-flow-col grid-cols-4 gap-[32px] mb-[50px]'>
					<FavouriteItem itemName={"vegetables burger"} pic={burger } description={"Barbecue Italian cuisine pizza"}/>
					<FavouriteItem itemName={"Spacial Pizza"} pic={pizza } description={"Barbecue Italian cuisine pizza"}/>
					<FavouriteItem itemName={"Spacial French fries"} pic={french } description={"Barbecue Italian cuisine"}/>
					<FavouriteItem itemName={"Cuisine Chicken"} pic={shrimp } description={"Japanese Cuisine Chicken"}/>
				</div>
			</div>
		</div>
	)	
}

export default SectionThree
