import type { FunctionComponent } from "react"
import { Container } from "~/components/Container"
import styles from "./Dresscode.module.css"
import { Image } from "./Image"

export const Dresscode: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<h2 className={styles.title}>Dress code</h2>
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
					Celý náš svatební den bude probíhat v přírodě na louce a ve stodole,
					proto své oblečení, prosíme, přizpůsobte tomuto místu a předpovědi
					počasí.
				</p>
				<p className={styles.text}>Oblečte se hlavně pohodlně :)</p>
			</Container>
		</div>
	)
}
