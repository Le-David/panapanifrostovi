import type { FunctionComponent } from "react"
import { Container } from "~/components/Container"
import styles from "./Dresscode.module.css"
import { Image } from "./Image"

export const Dresscode: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.image}>
					<Image
						className={styles.imageIn}
						isGoogleDrive
						imageId="1tZaXyxlp1taRRVMm5usT2_omLkYSZf41"
						width={856}
						height={173}
						alt="Jak se obléci"
					/>
				</div>
				<p className={styles.text}>
					Cely nas svatebni den bude probihat v prirode na louce a ve stodole,
					proto svuj dresscode prosime prizpusobte tomuto mistu ale i predpovedi
					pocasi v dany den. Oblecte se hlavne tak, abyste se citili pohodle :)
				</p>
			</Container>
		</div>
	)
}
