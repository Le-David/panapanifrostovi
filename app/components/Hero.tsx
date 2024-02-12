import type { FunctionComponent } from "react"
import olaf from "../images/olaf.png"
import styles from "./Hero.module.css"

export type HeroProps = {}

export const Hero: FunctionComponent<HeroProps> = ({}) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				Web budoucího pana a paní Frostovi (spíš Mrazíci)
			</h1>
			<img className={styles.image} src={olaf} alt="Olaf" />
			<p className={styles.text}>Web je v přípravě</p>
		</div>
	)
}
