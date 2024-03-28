import clsx from "clsx"
import type { FunctionComponent } from "react"
import { useInView } from "react-intersection-observer"
import { Container } from "~/components/Container"
import { Image } from "~/components/Image"
import styles from "./Parking.module.css"

export const Parking: FunctionComponent = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	})
	return (
		<div className={styles.wrapper}>
			<Container>
				<h2 className={styles.title}>Parkování a nocleh</h2>
				<div
					className={clsx(styles.image, inView && styles.is_inView)}
					ref={ref}
				>
					{/* @TODO: add animation that car is coming from left when intersecting */}
					<Image
						className={styles.imageIn}
						isGoogleDrive
						imageId="1ANnI-fq-I8g9tHvh0swjQOfhJkyIkaFf"
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
					Ubytování z kapacitních důvodů dokážeme nabídnout pouze nejbližší
					rodině, proto prosíme o pochopení a přizpůsobení se této situaci.
				</p>
				<p className={styles.text}>
					Využít lze například ubytovací zařízení v nedaleké Lenoře, případně
					můžete u stodoly rozložit stany, zaparkovat karavany nebo si užít
					spaní pod širákem - necháme na vás 🚐
				</p>
			</Container>
		</div>
	)
}
