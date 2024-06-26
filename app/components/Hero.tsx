import type { FunctionComponent } from "react"
import { Image } from "~/components/Image"
import styles from "./Hero.module.css"

export const Hero: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.background}>
				<Image
					className={styles.image}
					isGoogleDrive
					imageId="1CtUBNaXKwsBPqKjoqlPF2933Lnv2gbob"
					width={1161}
					height={810}
					fill
					alt="Pan a paní Frostovi"
				/>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>Vítejte na našem svatebním webu</h1>
				<p className={styles.hashtag}>#novotnajemrazena</p>
			</div>
		</div>
	)
}
