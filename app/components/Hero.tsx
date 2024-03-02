import type { FunctionComponent } from "react"
import { Image } from "~/components/Image"
import styles from "./Hero.module.css"

export const Hero: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.is_desktop}>
				<div className={styles.initial}>K</div>
				<Image
					className={styles.image}
					isGoogleDrive
					imageId="1sDjdEE6ZG1_MC5_SVcEYBijguncgf0Tz"
					width={480}
					height={675}
					alt="Pan a paní Frostovi"
				/>
				<div className={styles.initial}>D</div>
			</div>
			<div className={styles.is_mobile}>
				<Image
					className={styles.image}
					isGoogleDrive
					imageId="1sDjdEE6ZG1_MC5_SVcEYBijguncgf0Tz"
					width={480}
					height={675}
					alt="Pan a paní Frostovi"
				/>
				<div className={styles.content}>
					<div className={styles.initial}>K</div>
					<div className={styles.ampersand}>&</div>
					<div className={styles.initial}>D</div>
				</div>
			</div>
		</div>
	)
}
