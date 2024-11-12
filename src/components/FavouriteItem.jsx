import Image from 'next/image'
import React from 'react'

const FavouriteItem = ({ itemName, pic, description }) => {
	return (
		<div className="p-[32px] h-[300px] bg-white flex flex-col items-center gap-[24px]">
			<div className="flex justify-center items-center h-[120px] w-[120px]">
				<Image src={pic} height={120} width={120} alt={itemName} />
			</div>
			<hr className="w-[57px] border-t-[4px] border-[#BD1F17]" />

			<div className="text-center">
				<h1 className="uppercase font-[700] text-[24px] whitespace-nowrap">{itemName}</h1>
				<p className="font-[400] text-[16px]">{description}</p>
			</div>
		</div>
  	);
};

export default FavouriteItem;
