import type { FunctionComponent } from "react"
import styles from "./Hero.module.css"

export type HeroProps = {}

export const Hero: FunctionComponent<HeroProps> = ({}) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				Web budoucího pana a paní Frostovi (spíš Mrazíci)
			</h1>
		</div>
	)
}
