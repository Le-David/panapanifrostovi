import type { FunctionComponent } from "react"
import { Container } from "./Container"
import styles from "./Gift.module.css"
import { Image } from "./Image"

export const Gift: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<h2 className={styles.title}>Dary</h2>
				<div className={styles.image}>
					<Image
						isGoogleDrive
						imageId="1HdT-0qIUVu_Cg38d-igWKgy6fDJ-IBH1"
						width={220}
						height={220}
						alt="Dárek"
					/>
				</div>
				<p className={styles.text}>
					Budete-li nás chtít obdarovat něčím dalším, než svou přítomností,
					budeme rádi za finanční příspěvek :)
				</p>
				<p className={styles.text}>
					Tip: Pokud si nechcete lámat hlavu s tím, kde je nejbližší bankovat či
					jakou obálku zvolit, můžete nam přispět pomocí našeho virtuálního
					prasátka v podobě QR kódu níže.
				</p>
				<div className={styles.qr}>
					<Image
						isGoogleDrive
						imageId="1c_0DuOUGwnQ7uFGJLhOFru1wlJzDSqNz"
						width={250}
						height={250}
						alt="QR kód"
					/>
				</div>
				<h3 className={styles.thankYou}>Děkujeme</h3>
			</Container>
		</div>
	)
}
