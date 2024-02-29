import clsx from "clsx"
import type { FunctionComponent } from "react"
import styles from "./Image.module.css"

export type ImageProps = CommonImageProps &
	(GoogleDriveImageProps | { isGoogleDrive: false; url: string })

type CommonImageProps = {
	className?: string
	fill?: boolean
	width: number
	height: number
	alt?: string
}

type GoogleDriveImageProps = {
	isGoogleDrive: true
	imageId: string
}

/** If image is from google drive it must be set the permission to be visible by all
 * (or at least viewable by the website) */
export const Image: FunctionComponent<ImageProps> = ({
	alt = "",
	width,
	height,
	className,
	...otherProps
}) => {
	let url = ""

	if (otherProps.isGoogleDrive === true) {
		const size = `w${width}`
		url = `https://drive.google.com/thumbnail?id=${otherProps.imageId}&sz=${size}`
	} else {
		url = otherProps.url
	}
	return (
		<div
			className={styles.wrapper}
			style={{
				"--Image-width": width,
			}}
		>
			<img
				className={clsx(
					styles.image,
					otherProps.fill && styles.is_fill,
					className
				)}
				src={url}
				width={width}
				height={height}
				alt={alt}
			/>
		</div>
	)
}
