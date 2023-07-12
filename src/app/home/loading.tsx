import Image from "next/image";
import starship from '/public/TIE-fighter.png'

export default function Loading({ className }: { className: string }) {
	return (
			<Image 
				src={starship} 
				alt='Loading...'
				width={500}
				height={400}
				className={className}
				objectFit="cover"
			/>
	)
}
