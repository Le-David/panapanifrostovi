import type { FunctionComponent } from "react"
import { Container } from "~/components/Container"
import { Image } from "~/components/Image"
import styles from "./Parking.module.css"

export const Parking: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.image}>
					{/* @TODO: add animation that car is coming from left when intersecting */}
					<Image
						className={styles.imageIn}
						isGoogleDrive
						imageId="1VgSXD0pUD9s90LcAEgvXKurNlbrXHeno"
						width={600}
						height={345}
						// fill
						alt="Mini Van"
					/>
				</div>
				<p className={styles.text}>
					Zaparkovat lze primo u stodoly, pres den nebude potreba nikam
					prejizdet, cely den budeme travit na tomto miste. Ubytovani z
					kapacitnich duvodu dokazeme nabidnout pouze nejblizsi rodine, proto
					prosime o pochopeni a prizpusobeni se teto situaci. Viuzit lze
					napriklad holety v nedaleke Lenore, nebo stany, karavany ci spani pod
					sirakem nechame ciste na vas :)
				</p>
			</Container>
		</div>
	)
}
