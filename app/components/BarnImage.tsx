import type { FunctionComponent } from "react"
import styles from "./BarnImage.module.css"
import { Image } from "./Image"

export const BarnImage: FunctionComponent = () => {
	// @TODO: add more images than just one
	// @TODO: parallax effect
	return (
		<div className={styles.wrapper}>
			<div className={styles.is_desktop}>
				<Image
					className={styles.image}
					imageId="1bxf_SLM6g-0UKVpM2mmHSPO-LvSgnLyz"
					isGoogleDrive
					width={1920}
					height={1280}
					alt="Stodola"
					fill
				/>
			</div>
			<div className={styles.is_mobile}>
				<Image
					className={styles.image}
					imageId="19wF4UUJl4V6mgtVkPZqlJQX25GuWek0E"
					isGoogleDrive
					width={450}
					height={300}
					alt="Stodola"
					fill
				/>
			</div>
		</div>
	)
}
