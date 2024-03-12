import type { FunctionComponent } from "react"
import { Image } from "~/components/Image"
import { Container } from "./Container"
import styles from "./Hero.module.css"

export const Hero: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Image
				className={styles.image}
				isGoogleDrive
				imageId="1sDjdEE6ZG1_MC5_SVcEYBijguncgf0Tz"
				width={480}
				height={675}
				alt="Pan a paní Frostovi"
			/>
			<Container>
				<h1 className={styles.title}>Vítejte na našem svatebním webu</h1>
			</Container>
		</div>
	)
}
