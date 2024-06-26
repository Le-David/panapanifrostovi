import type { FunctionComponent } from "react"
import styles from "./Ceremony.module.css"
import { Container } from "./Container"

export const Ceremony: FunctionComponent = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.main}>
					<div className={styles.icon}>
						<svg
							className={styles.iconSvg}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
						>
							<path d="M58 10h-7c-.5-2.3-2-4-4-4s-3.5 1.7-4 4h-2c-.5-2.3-2-4-4-4s-3.6 1.7-4 4h-6c-.5-2.3-2-4-4-4s-3.5 1.7-4 4h-2c-.5-2.3-2-4-4-4s-3.6 1.7-4 4H5a3 3 0 0 0-3 3v42a3 3 0 0 0 3 3h50a3 3 0 0 0 3-3v-1h3a1 1 0 0 0 1-1l-2-41a2 2 0 0 0-2-2zM47 8c.9 0 1.6.8 1.9 2H45c.3-1.2 1-2 1.9-2zM37 8c.9 0 1.6.8 1.9 2H35c.3-1.2 1-2 1.9-2zM23 8c.9 0 1.6.8 1.9 2H21c.3-1.2 1-2 1.9-2zM13 8c.9 0 1.6.8 1.9 2H11c.3-1.2 1-2 1.9-2zm-8 4h4c.4 2.3 2 4 4 4a1 1 0 0 0 0-2c-.9 0-1.6-.8-1.9-2h8c.3 2.3 2 4 3.9 4a1 1 0 1 0 0-2c-.9 0-1.6-.8-1.9-2h12c.3 2.3 2 4 3.9 4a1 1 0 0 0 0-2c-.9 0-1.6-.8-1.9-2h8c.3 2.3 2 4 3.9 4a1 1 0 0 0 0-2c-.9 0-1.6-.8-1.9-2H56v6H4v-5a1 1 0 0 1 1-1zm0 44a1 1 0 0 1-1-1V20h52v25a3 3 0 0 1-3 3h-4a1 1 0 0 0-1 1v4a3 3 0 0 1-3 3H5zm50.4-6.7a10 10 0 0 1-6 6.1A5 5 0 0 0 50 53v-3h3a5 5 0 0 0 2.4-.7zM56 55a1 1 0 0 1-1 1h-2.3a12 12 0 0 0 3.3-3.3V55zm2-3V12l2 40z" />
							<path d="M18 52H7a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2zM26 52h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM24 34a6 6 0 1 0 5 2.7 6 6 0 0 0-5-2.7zm4 6.8a4 4 0 1 1-.7-3 4 4 0 0 1 .6 3z" />
							<path d="M46.3 45.6a10 10 0 0 0-.5-11.8c1.8 0 4-.5 5-2l.3-.4a3.5 3.5 0 0 0-3.6-5.4 3.5 3.5 0 0 0-1.4-2.3 3.5 3.5 0 0 0-2.7-.5 3.6 3.6 0 0 0-2.3 1.5l-.1.3c-1.1 1.6-.7 3.7 0 5.4A10 10 0 0 0 31 33a10 10 0 0 0-10.4-2.3l1.5-5.3a1 1 0 0 0 0-.2 1 1 0 0 0 0-.2 1 1 0 0 0 0-.2 1 1 0 0 0 0-.2H22c-.1 0 0 0 0 0a1 1 0 0 0-.2-.2 1 1 0 0 0-.2-.1l-3.4-1.5a1 1 0 0 0-1 .1l-6.6 4.5a1 1 0 0 0-.4.8v3.7a1 1 0 0 0 0 .2 1 1 0 0 0 .1.2l.1.1.1.1a1 1 0 0 0 .3.2 1 1 0 0 0 .3.1l5.5.6a10 10 0 0 0 5.5 16.5 10.1 10.1 0 0 0 2 .2 10 10 0 0 0 5.5-1.7 10.1 10.1 0 0 0 1.4-1.2 10 10 0 0 0 1.4 1.2 10 10 0 0 0 13.9-2.7zm-3.7-19.5.2-.3a1.6 1.6 0 0 1 1-.6 1.5 1.5 0 0 1 1.8 1.2l.2 1a1 1 0 0 0 1.1.7l1-.2a1.5 1.5 0 0 1 1.1.3 1.5 1.5 0 0 1 .4 2.1l-.2.3c-.9 1.4-4 1.2-5.5 1-.8-1.3-2-4.1-1-5.5zm-23.2 1.3-1.1 4L14 31zM18 24.8l1 .4-2.5 1.8-.6-.8zm-3.7 2.5.5.8-2.6 1.7v-1.2zm14.2 19.3a8 8 0 1 1 2.1-11 8 8 0 0 1-2.1 11zm5 0a8 8 0 0 1-1.2-1 9.8 9.8 0 0 0 1-2 6 6 0 1 0 0-7.3 10.1 10.1 0 0 0-1-1.9 8 8 0 0 1 10.2-1 8 8 0 1 1-9 13.2zM34 40z" />
						</svg>
					</div>
					<p className={styles.text}>
						Svatba se bude konat
						<br />
						20. července 2024
						<br />v Hajnýho Stodole
						<br />
						České Žleby 52, Lenora
					</p>
				</div>
			</Container>
		</div>
	)
}
