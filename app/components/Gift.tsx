import type { FunctionComponent } from "react"
import { Container } from "./Container"
import styles from "./Gift.module.css"
import { Image } from "./Image"

export const Gift: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.image}>
					<Image
						isGoogleDrive
						imageId="1HdT-0qIUVu_Cg38d-igWKgy6fDJ-IBH1"
						width={300}
						height={300}
						alt="Dárek"
					/>
				</div>
				<p className={styles.text}>
					Budete li nas chtit obdarovat necim dalsim, nez jen svou pritomnosti,
					budeme radi za financni prispevek :)
				</p>
				<p className={styles.text}>
					Tip: Pokud si nechcete lamat hlavu s tim, kde je nejblizsi bankovat
					ci, jakou obalku zvolit, muzete nam prispet pomoci naseho virtuaoniho
					prasatka pomoci qr kodu nize. Dekujeme!
				</p>
				<div className={styles.qr}>
					<Image
						isGoogleDrive
						imageId="1D4xo2W0QhsEXqZqhTzg8_rNDyWboq31m"
						width={300}
						height={300}
						alt="QR kód"
					/>
				</div>
			</Container>
		</div>
	)
}
