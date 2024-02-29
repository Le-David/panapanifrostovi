import type { FunctionComponent } from "react"
import { Container } from "./Container"
import { Image } from "./Image"
import styles from "./OurStory.module.css"

export const OurStory: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.main}>
					<div className={styles.content}>
						<h2 className={styles.title}>Jak jsme se poznali</h2>
						<p className={styles.text}>
							Začalo to jednou takhle před několika lety...
						</p>
					</div>
					<div className={styles.images}>
						<div className={styles.image}>
							<Image
								className={styles.imageIn}
								isGoogleDrive
								imageId="177fYXDKNBmTOjqPnAtLTX8CesNvnTlOY"
								width={300}
								height={533}
								alt="Naše zasnoubení"
								fill
							/>
						</div>
						<div className={styles.image}>
							<Image
								className={styles.imageIn}
								isGoogleDrive
								imageId="1QHvHh4wi6K6NsKTrWkxsldynE6XMafJT"
								width={300}
								height={400}
								alt="Naše zasnoubení"
								fill
							/>
						</div>
						<div className={styles.image}>
							<Image
								className={styles.imageIn}
								isGoogleDrive
								imageId="1Shcmx3ouCM96dwfsSiibZZFBUpRQg72A"
								width={300}
								height={400}
								alt="Naše zasnoubení"
								fill
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
