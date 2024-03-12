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
						width={300}
						height={172}
						// fill
						alt="Mini Van"
					/>
				</div>
				<p className={styles.text}>
					Zaparkovat lze přímo u stodoly, přes den nebude potřeba nikam
					přejíždět, jelikož celý den budeme oslavovat na jednom místě.
				</p>
				<p className={styles.text}>
					Ubytování z kapacitních důvodu dokážeme nabídnout pouze nejbližší
					rodině, proto prosíme o pochopení a přizpůsobeni se této situaci.
				</p>
				<p className={styles.text}>
					Využít lze například ubytovací zařízení v nedaleké Lenoře, případně
					můžete u stodoly rozložit stany, zaparkovat karavany nebo si užít
					spaní pod širákem - necháme na vás :)
				</p>
			</Container>
		</div>
	)
}
