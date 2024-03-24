import clsx from "clsx"
import type { FunctionComponent } from "react"
import styles from "./BackgroundImage.module.css"
import { Image } from "./Image"

type BackgroundImageProps = {
	type?: "first" | "second"
}

export const BackgroundImage: FunctionComponent<BackgroundImageProps> = ({
	type = "first",
}) => {
	// @TODO: add more images than just one
	// @TODO: parallax effect
	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.is_desktop, styles[`is_${type}`])}>
				{type === "first" && (
					<Image
						className={styles.image}
						imageId="1jsaIV7byeYd3ZngHVlxRNXxwjmep1AaD"
						isGoogleDrive
						width={1920}
						height={1440}
						alt="Stodola"
						fill
					/>
				)}
				{type === "second" && (
					<Image
						className={styles.image}
						imageId="1bxf_SLM6g-0UKVpM2mmHSPO-LvSgnLyz"
						isGoogleDrive
						width={1920}
						height={1280}
						alt="Stodola"
						fill
					/>
				)}
			</div>
			<div className={clsx(styles.is_mobile, styles[`is_${type}`])}>
				{type === "first" && (
					<Image
						className={styles.image}
						imageId="1jsaIV7byeYd3ZngHVlxRNXxwjmep1AaD"
						isGoogleDrive
						width={450}
						height={300}
						alt="Stodola"
						fill
					/>
				)}
				{type === "second" && (
					<Image
						className={styles.image}
						imageId="19wF4UUJl4V6mgtVkPZqlJQX25GuWek0E"
						isGoogleDrive
						width={450}
						height={300}
						alt="Stodola"
						fill
					/>
				)}
			</div>
		</div>
	)
}
