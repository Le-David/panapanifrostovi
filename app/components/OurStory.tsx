import clsx from "clsx"
import { type FunctionComponent } from "react"
import { useInView } from "react-intersection-observer"
import { Container } from "./Container"
import { Image } from "./Image"
import styles from "./OurStory.module.css"

export const OurStory: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.main}>
					<div className={styles.content}>
						<h2 className={styles.title}>Kristýna a David</h2>
					</div>
					<div className={styles.images}>
						<ImageComponent
							imageId="177fYXDKNBmTOjqPnAtLTX8CesNvnTlOY"
							width={300}
							height={533}
							alt="Mladíci"
						/>
						<ImageComponent
							imageId="1QHvHh4wi6K6NsKTrWkxsldynE6XMafJT"
							width={300}
							height={400}
							alt="My"
						/>
						<ImageComponent
							imageId="1Shcmx3ouCM96dwfsSiibZZFBUpRQg72A"
							width={300}
							height={400}
							alt="Naše zasnoubení"
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}

const ImageComponent: FunctionComponent<{
	imageId: string
	width: number
	height: number
	alt: string
}> = ({ imageId, width, height, alt }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	})
	return (
		<div className={clsx(styles.image, inView && styles.is_inView)} ref={ref}>
			<Image
				className={styles.imageIn}
				isGoogleDrive
				imageId={imageId}
				width={width}
				height={height}
				alt={alt}
				fill
			/>
		</div>
	)
}
