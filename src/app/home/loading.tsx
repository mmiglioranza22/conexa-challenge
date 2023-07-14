import Image from "next/image";
import starship from '/public/TIE-fighter.png'

export default function Loading({ className }: { className: string }) {
	return (
		<div className={className}>
			<Image 
				src={starship} 
				alt='Loading...'
				objectFit="cover"
				layout="fill"
			/>
		</div>
	)
}
