import type { FunctionComponent } from "react"
import { Container } from "./Container"
import styles from "./Schedule.module.css"

export const Schedule: FunctionComponent = () => {
	// @TODO: fade in one item by one
	return (
		<div className={styles.wrapper}>
			<Container>
				<h2 className={styles.title}>Program celého dne</h2>
				<div className={styles.schedule}>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								xmlSpace="preserve"
								width="40"
								height="40"
								clipRule="evenodd"
								fillRule="evenodd"
								imageRendering="optimizeQuality"
								shapeRendering="geometricPrecision"
								textRendering="geometricPrecision"
								viewBox="0 0 416.6 416.3"
							>
								<path
									d="M276.7 385.3a93.2 93.2 0 0 1-43-10.4c-4 4.5-8.4 8.7-13 12.6a111 111 0 1 0 56-207 111.2 111.2 0 0 0-90.2 176c4.8-3.3 9.1-7.3 13-11.6a93.7 93.7 0 1 1 77.2 40.4zm-73.2-219C181.2 144.2 158 121 158 96.6c0-15.9 13-28.7 28.8-28.7 10.3 0 16.8 4 21.7 9.9a25.8 25.8 0 0 1 21.5-9.9A28.8 28.8 0 0 1 259 96.4c0 24.7-23 47.7-45.3 70a7.2 7.2 0 0 1-10.1 0zM186.9 82a14.5 14.5 0 0 0-14.5 14.6c0 17.2 17.6 36.1 36.1 54.8 18.6-18.7 36.2-37.6 36.2-54.8 0-8-6.5-14.6-14.6-14.6-6.2 0-10 1.8-15.2 12.4a7.1 7.1 0 0 1-12.7 0c-5.2-10.6-8.9-12.4-15.3-12.4zm21.7-36c-4 0-7.2-3.2-7.2-7V19.3a7.1 7.1 0 0 1 14.2 0v19.4a7 7 0 0 1-7 7zm56.4 15a7 7 0 0 1-6-10.5l9.6-16.8a7.1 7.1 0 1 1 12.2 7.1l-9.6 16.8a6.9 6.9 0 0 1-6.2 3.4zm-112.9 0a7 7 0 0 1-6.2-3.4l-9.7-16.8a7.1 7.1 0 0 1 12.4-7.1l9.6 16.8a7.1 7.1 0 0 1-6 10.5zM47 96.4l-13-27L7 56.6a7.1 7.1 0 0 1 0-12.8l26.7-12.9L46.8 4a7.1 7.1 0 0 1 12.8 0l13 26.8 26.7 12.9a7.1 7.1 0 0 1 0 12.8l-26.8 13-13 26.8a7.1 7.1 0 0 1-12.7 0zM26.5 50.1l15.7 7.7c1.5.7 2.7 1.8 3.4 3.2l7.6 15.8L60.9 61a7.1 7.1 0 0 1 3.2-3.2L80 50l-15.8-7.6A6.9 6.9 0 0 1 61 39l-7.7-15.8-7.6 15.8a7.1 7.1 0 0 1-3.4 3.4zm331 107.2-12.9-26.8-26.9-12.9a7.1 7.1 0 0 1 0-12.8l26.8-13 13-26.8a7.1 7.1 0 0 1 12.8 0L383 91.9l27 12.8a7.1 7.1 0 0 1 0 12.8l-27 13-12.8 26.8a7.1 7.1 0 0 1-12.8 0zM337 111l16 7.7c1.3.7 2.5 1.9 3.2 3.3l7.7 15.8 7.6-15.8a7.3 7.3 0 0 1 3.3-3.3l15.8-7.7-15.8-7.6a7.1 7.1 0 0 1-3.3-3.3l-7.6-15.8-7.7 15.8a7.3 7.3 0 0 1-3.3 3.3zm-94.3 252.5a79.6 79.6 0 1 0 0-144 125 125 0 0 1 0 144zm-12-136.8a78.7 78.7 0 0 0-13 11.7 93.7 93.7 0 1 1-34.2-30.2c4-4.5 8.4-8.7 13-12.6a111.2 111.2 0 0 0-167 96 111 111 0 1 0 201.2-64.9zm-22-40.1a125.3 125.3 0 0 1 193.2 105 125.3 125.3 0 0 1-193.3 104.9 125.3 125.3 0 0 1-193.3-105 125.3 125.3 0 0 1 193.3-105zm0 63.8a79.6 79.6 0 0 0 0 82.1 79.5 79.5 0 0 0 0-82.1zm-34.2-30.9a79.5 79.5 0 1 0 0 144 125 125 0 0 1 0-144z"
									fill="#000"
									strokeWidth="0.0586405"
								/>
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>12:30</h3>
						<h4 className={styles.scheduleItemDescription}>Svatební obřad</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								width="40"
								height="40"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100.4 100.4"
								enableBackground="new 0 0 100.353 100.352"
								xmlSpace="preserve"
							>
								<path d="M89 32.3H74.7l-10-18c-.2-.5-.7-.8-1.2-.8h-27c-.5 0-1 .3-1.3.8l-9.8 18H11c-.8 0-1.5.7-1.5 1.5V85c0 .8.7 1.5 1.5 1.5h78c.8 0 1.5-.7 1.5-1.5V33.8c0-.8-.7-1.5-1.5-1.5zm-1.5 51.2h-75V35.3h13.8c.6 0 1-.3 1.3-.8l9.8-18h25.2l10 18c.2.5.7.8 1.2.8h13.7v48.2z" />
								<path d="M50 29.8a24.2 24.2 0 1 0 0 48.5 24.2 24.2 0 0 0 0-48.5zm0 45.4a21.2 21.2 0 1 1 0-42.4 21.2 21.2 0 0 1 0 42.4z" />
								<path d="M50 38.9a15.1 15.1 0 1 0 0 30.3 15.1 15.1 0 0 0 0-30.3zm0 27.2A12.1 12.1 0 1 1 50 42 12.1 12.1 0 0 1 50 66z" />
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>13:00</h3>
						<h4 className={styles.scheduleItemDescription}>Společné focení</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g data-name="outline cut">
									<path d="M256 88c-92.6 0-168 75.4-168 168s75.4 168 168 168 168-75.4 168-168S348.6 88 256 88zm0 320c-83.8 0-152-68.2-152-152s68.2-152 152-152 152 68.2 152 152-68.2 152-152 152z" />
									<path d="M256 128a128 128 0 1 0 128 128 128.1 128.1 0 0 0-128-128zm0 240a112 112 0 1 1 112-112 112.1 112.1 0 0 1-112 112zM488 48a8 8 0 0 0-15.4-3A453.5 453.5 0 0 0 440 214.2V273a23.1 23.1 0 0 0 1 7h-9v16h15.6l-6.8 127.6a23.2 23.2 0 1 0 46.3 0L480.4 296H496v-16h-8zm-32 166.2a437.6 437.6 0 0 1 16-117.6V280h-9a7 7 0 0 1-7-7zm13.2 215.6a7.2 7.2 0 0 1-12.4-5.4l6.8-128.4h.8l6.8 128.4a7.1 7.1 0 0 1-2 5.4zM39.9 172.6l-7.4 251.2a23.5 23.5 0 1 0 47 0l-7.4-251.2A40 40 0 0 0 96 136V64H80v40a8 8 0 0 1-16 0V64H48v40a8 8 0 0 1-16 0V64H16v72a40 40 0 0 0 23.9 36.6zm16.3 3.4 7.3 248.2a7.5 7.5 0 1 1-15 0L55.8 176zM40 128a23.9 23.9 0 0 0 16-6.1 24 24 0 0 0 24 4.7v9.4a24 24 0 0 1-48 0v-9.4a23.8 23.8 0 0 0 8 1.4z" />
								</g>
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>14:00</h3>
						<h4 className={styles.scheduleItemDescription}>Svatební oběd</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 64 64"
								xmlSpace="preserve"
							>
								<path d="M61 56h-2V41c0-.6-.4-1-1-1h-5V28c0-.6-.4-1-1-1h-6V16c0-.6-.4-1-1-1h-6.6l2.5-6.6c.2-.4.1-.7-.1-1-.2-.2-.5-.4-.8-.4h-.8c.5-.5.8-1.2.8-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H34c-.3 0-.6.2-.8.4-.2.3-.3.6-.1 1l2.5 6.6h-4.9L28 7.8A3 3 0 0 0 30 5c0-1.7-1.3-3-3-3s-3 1.3-3 3a3 3 0 0 0 2 2.8L23.3 15H19c-.6 0-1 .4-1 1v11h-6c-.6 0-1 .4-1 1v12H6c-.6 0-1 .4-1 1v15H3c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h58c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM37 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm1.6 5L37 13.2 35.4 9h3.2zM57 56H28a11 11 0 0 1-11-11v-3h40v14zM11 42h4v3c0 4.6 2.4 8.6 6 11a11 11 0 0 1-10-11v-3zm40-2h-8.1A13 13 0 0 0 49 29h2v11zm-14 0a13 13 0 0 0 6-11h4a11 11 0 0 1-10 11zm7-13h-7a11 11 0 0 1-10.9-10H44v10zM24.1 17a13 13 0 0 0 6 10 11 11 0 0 1-10-10h4zM27 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 6.8 1.6 4.2h-3.1l1.5-4.2zm-7 12.1c1 1.7 2.4 3.1 4.1 4.1H20v-4.1zM13 29h28a11 11 0 0 1-11 11H13V29zM7 42h2v3a13 13 0 0 0 6.1 11H7V42zm53 18H4v-2h56v2zM7.4 17.8l.6.2.6-.2 4.2-3.4A3 3 0 0 0 11 9h-.1a3 3 0 0 0-2.2.9l-.7.7-.7-.7C6.7 9.3 6 9 5.2 9H5a3 3 0 0 0-3 3c0 .9.4 1.8 1.1 2.4l4.3 3.4zM5 11h.1c.3 0 .5.1.7.3l1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4c.2-.2.5-.3.7-.3h.3c.6 0 1 .5 1 1 0 .3-.1.6-.4.8L8 15.7l-3.6-2.9A1 1 0 0 1 4 12c0-.5.5-1 1-1zM59 2h-.1c-.8 0-1.6.3-2.1.9l-.8.7-.7-.7c-.6-.6-1.3-.9-2.1-.9H53a3 3 0 0 0-3 3c0 .9.4 1.8 1.1 2.4l4.2 3.4.6.2.6-.2 4.2-3.4C61.6 6.8 62 6 62 5a3 3 0 0 0-3-3zm.6 3.8L56 8.7l-3.6-2.9A1 1 0 0 1 52 5c0-.6.5-1 1-1h.1c.3 0 .5.1.7.3l1.4 1.4c.4.4 1 .4 1.4 0L58 4.3l.8-.3h.2c.6 0 1 .5 1 1 0 .3-.1.6-.4.8z" />
								<path d="M40 18h2v2h-2zM35 23h2v2h-2zM18 31h2v2h-2zM23 35h2v2h-2zM38 44h2v2h-2zM28 50h2v2h-2zM43 52h2v2h-2zM53 47h2v2h-2zM20 45h2v2h-2z" />
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>15:30</h3>
						<h4 className={styles.scheduleItemDescription}>Krájení dortu</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								xmlSpace="preserve"
								viewBox="0 0 550 550"
								width="550"
								height="550"
								shapeRendering="geometricPrecision"
								textRendering="geometricPrecision"
								imageRendering="optimizeQuality"
								fillRule="evenodd"
								clipRule="evenodd"
							>
								<g id="Layer_x0020_1">
									<g id="_547207016">
										<path
											// fill="#000002"
											className={styles.iconSvgDance}
											d="M273 531c-106 0-192-86-192-193 0-106 86-192 192-192a192.5 192.5 0 1 1 0 385zm0-372c-98 0-179 81-179 179 0 99 81 179 179 179 99 0 179-80 179-179 0-98-80-179-179-179z"
										/>
										<path
											className={styles.iconSvgDance}
											d="M284 229c-50 0-98-7-139-21-4-1-6-5-5-8 2-4 6-6 9-5 40 14 87 21 135 21 42 0 83-6 119-16 4-1 7 2 8 5 1 4-1 8-4 9-37 10-80 15-123 15zM284 311c-70 0-137-15-185-40-3-2-4-6-2-10 1-3 5-4 9-2 45 24 110 38 178 38 60 0 117-10 161-30 3-1 7 1 9 4 1 3 0 7-4 9-45 20-104 31-166 31zM284 392c-80 0-153-18-200-49-4-2-4-6-2-10 2-3 6-4 9-2 45 30 117 48 193 48 65 0 126-13 172-35 3-2 7 0 9 3s0 7-3 9c-47 24-110 36-178 36zM284 474c-65 0-127-12-173-35-4-1-5-5-4-9 2-3 6-4 9-3 45 22 105 33 168 33 50 0 98-7 139-21 3-1 7 1 9 4 1 4-1 8-5 9-42 14-91 22-143 22z"
										/>
										<path
											className={styles.iconSvgDance}
											d="M273 531c-68 0-123-86-123-193 0-106 55-192 123-192s124 86 124 192c0 107-56 193-124 193zm0-372c-60 0-110 81-110 179 0 99 50 179 110 179 61 0 110-80 110-179 0-98-49-179-110-179z"
										/>
										<path
											className={styles.iconSvgDance}
											d="M273 531c-36 0-46-126-46-193 0-66 10-192 46-192 37 0 46 126 46 192 0 67-9 193-46 193zm0-372c-11 0-32 63-32 179s21 179 32 179 33-63 33-179-22-179-33-179z"
										/>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M245 161c-2 0-3 0-5-1-1-2-2-3-2-5v-43c0-4 3-7 7-7h57c3 0 7 3 7 7v43c0 2-1 3-3 5-1 1-3 2-5 1-9-1-18-2-27-2h-2c-9 0-18 1-26 2h-1zm7-42v28c6-1 13-1 20-1h3c6 0 13 0 20 1v-28h-43z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M288 119h-30c-4 0-7-3-7-7V83c0-4 3-7 7-7h30c4 0 7 3 7 7v29c0 4-3 7-7 7zm-23-14h17V90h-17v15z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M273 90c-4 0-7-3-7-7V26c0-4 3-7 7-7s7 3 7 7v57c0 4-3 7-7 7z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M124 178c-1 0-3 0-4-1l-29-16-30 16c-3 1-5 1-8-1-2-1-3-4-2-6l6-34-25-23c-2-2-2-5-1-7 0-3 3-4 5-5l34-4 14-31c2-2 4-4 7-4 2 0 5 2 6 4l14 31 34 4c3 1 5 2 6 5 0 2 0 5-2 7l-25 23 6 34c1 2 0 5-2 6s-3 2-4 2zm-72-65 17 16c2 2 3 4 2 6l-4 23 20-11c2-1 5-1 7 0l20 11-4-23c-1-2 0-4 2-6l17-16-23-3c-3 0-5-2-6-4l-9-21-10 21c-1 2-3 4-6 4l-23 3z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M506 517c-1 0-2-1-3-1l-20-11-19 11c-2 1-5 1-7-1-2-1-3-4-3-6l4-22-16-15c-2-2-2-5-2-7 1-3 3-4 6-5l22-3 9-19c1-3 4-4 6-4 3 0 5 1 7 4l9 19 22 3c2 1 4 2 5 5 1 2 0 5-2 7l-16 15 5 22c0 2-1 5-3 6-1 1-3 2-4 2zm-23-26h4l9 6-2-11c0-2 1-5 2-6l9-8-12-2c-2 0-4-1-5-3l-5-11-4 11c-1 2-3 3-6 3l-11 2 8 8c2 1 3 4 2 6l-2 11 10-6h3z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M504 232c-1 0-2-1-3-1l-19-11-19 11c-3 1-5 1-8-1-2-1-3-4-2-6l4-22-16-15c-2-2-3-5-2-7 1-3 3-4 6-5l21-2 10-20c1-3 3-4 6-4s5 1 6 4l9 20 22 2c3 1 5 2 6 5 1 2 0 5-2 7l-16 15 4 22c1 2 0 5-3 6-1 1-2 2-4 2zm-22-26c1 0 2 0 3 1l10 5-2-11c-1-2 0-5 2-6l8-8-11-1c-2-1-4-2-5-4l-5-10-5 10c-1 2-3 3-5 4l-11 1 8 8c2 1 2 4 2 6l-2 11 10-5c1-1 2-1 3-1z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M69 516c-2 0-4-1-6-3l-27-35c-2-2-2-5 0-8l27-34c3-4 8-4 11 0l27 34c2 3 2 6 0 8l-27 35c-1 2-3 3-5 3zm-19-42 19 24 18-24-18-23-19 23z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M57 285c-2 0-4-1-5-2l-27-35c-2-2-2-6 0-8l27-35c2-3 8-3 10 0l27 35c2 2 2 6 0 8l-27 35c-1 1-3 2-5 2zm-18-41 18 24 18-24-18-23-18 23z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgDance}
												d="M403 156c-2 0-4-1-6-3l-27-35c-2-2-2-5 0-8l27-34c3-4 8-4 11 0l27 34c2 3 2 6 0 8l-27 35c-1 2-3 3-5 3zm-19-42 19 24 18-24-18-23-19 23z"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>17:30</h3>
						<h4 className={styles.scheduleItemDescription}>
							Novomanželský tanec
						</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								xmlSpace="preserve"
								width="163.8"
								height="163.8"
								shapeRendering="geometricPrecision"
								textRendering="geometricPrecision"
								imageRendering="optimizeQuality"
								fillRule="evenodd"
								clipRule="evenodd"
								viewBox="0 0 1707 1707"
							>
								<g id="Layer_x0020_1">
									<g id="_224724032">
										<path
											className={styles.iconSvgRaut}
											d="M1394 1612H313c-172 0-312-140-312-312 0-13 10-23 23-23h1659c12 0 23 10 23 23 0 172-140 312-312 312zM48 1324c12 135 126 242 264 242h1082c138 0 252-107 264-242H48z"
										/>
										<path
											className={styles.iconSvgRaut}
											d="M676 1324H327c-62 0-112-51-112-112 0-62 50-112 112-112h349c62 0 112 50 112 112 0 61-50 112-112 112zm-349-178c-36 0-66 30-66 66s30 65 66 65h349c36 0 65-29 65-65s-29-66-65-66H327z"
										/>
										<path
											className={styles.iconSvgRaut}
											d="M501 1146c-118 0-214-96-214-214s96-214 214-214 214 96 214 214-96 214-214 214zm0-381a167.5 167.5 0 0 0 0 335c93 0 168-76 168-168s-75-167-168-167z"
										/>
										<path
											className={styles.iconSvgRaut}
											d="M676 765H327c-62 0-112-51-112-112 0-62 50-112 112-112h349c62 0 112 50 112 112 0 61-50 112-112 112zM327 587c-36 0-66 30-66 66s30 65 66 65h349c36 0 65-29 65-65s-29-66-65-66H327z"
										/>
										<path
											className={styles.iconSvgRaut}
											d="M501 587c-13 0-23-10-23-23V118c0-13 10-23 23-23s24 10 24 23v446c0 13-11 23-24 23z"
										/>
										<g>
											<path
												className={styles.iconSvgRaut}
												d="M1380 1324h-349c-62 0-112-51-112-112 0-62 50-112 112-112h349c62 0 112 50 112 112 0 61-50 112-112 112zm-349-178c-36 0-66 30-66 66s30 65 66 65h349c36 0 65-29 65-65s-29-66-65-66h-349z"
											/>
											<path
												className={styles.iconSvgRaut}
												d="M1205 1146c-118 0-214-96-214-214s96-214 214-214 214 96 214 214-96 214-214 214zm0-381a167.5 167.5 0 0 0 0 335c93 0 168-76 168-168s-75-167-168-167z"
											/>
											<path
												className={styles.iconSvgRaut}
												d="M1380 765h-349c-62 0-112-51-112-112 0-62 50-112 112-112h349c62 0 112 50 112 112 0 61-50 112-112 112zm-349-178c-36 0-66 30-66 66s30 65 66 65h349c36 0 65-29 65-65s-29-66-65-66h-349z"
											/>
											<path
												className={styles.iconSvgRaut}
												d="M1205 587c-13 0-23-10-23-23V118c0-13 10-23 23-23s24 10 24 23v446c0 13-11 23-24 23z"
											/>
										</g>
										<g>
											<path
												className={styles.iconSvgRaut}
												d="M1413 1468H293c-13 0-23-11-23-23 0-13 10-24 23-24h1120c13 0 24 11 24 24 0 12-11 23-24 23z"
											/>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>18:00</h3>
						<h4 className={styles.scheduleItemDescription}>Raut</h4>
					</div>
					<div className={styles.scheduleItem}>
						<div className={styles.scheduleItemIcon}>
							<svg
								className={styles.scheduleItemIconIn}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 100.4 100.4"
								enableBackground="new 0 0 100.353 100.352"
								xmlSpace="preserve"
							>
								<path d="m24.4 57.6 6.2-6.1a1.5 1.5 0 0 0-.8-2.6L21 47.7l-3.8-7.9c-.3-.5-.8-.8-1.4-.8-.6 0-1 .3-1.3.8l-4 7.9L2 48.9a1.5 1.5 0 0 0-.8 2.6l6.3 6.1L6 66.2a1.5 1.5 0 0 0 2.2 1.6l7.7-4 7.8 4a1.5 1.5 0 0 0 2.1-1.6l-1.4-8.6zM21.7 56c-.4.3-.5.8-.4 1.3l1 6.4-5.7-3c-.4-.2-1-.2-1.4 0l-5.7 3 1-6.4c.1-.5 0-1-.4-1.3l-4.6-4.5 6.4-1c.5 0 1-.3 1.1-.8l3-5.8 2.8 5.8c.2.5.6.8 1.1.8l6.4 1-4.6 4.5z" />
								<path d="M29.9 57c-.8-.3-1.6.3-1.8 1s.3 1.7 1.1 1.9c.3 0 20.6 4.7 27 24a1.5 1.5 0 0 0 2.9-1 41.8 41.8 0 0 0-29.2-26zM63.3 72.9c-14.9-9.6-9.5-35.5-9.4-35.8a1.5 1.5 0 0 0-3-.6c0 .3-1.5 7-1 15.2.8 11 4.8 19.3 11.8 23.7a1.5 1.5 0 0 0 2-.4c.5-.7.3-1.7-.4-2.1z" />
								<path d="m47.9 33.1 5.8-.7 4 4.3a1.5 1.5 0 0 0 2.5-.7l1-5.8 5.4-2.4a1.5 1.5 0 0 0 .1-2.7l-5.1-2.8-.7-5.8a1.5 1.5 0 0 0-2.5-1l-4.2 4.1-5.8-1.2a1.5 1.5 0 0 0-1.6 2.1l2.5 5.3-3 5.1a1.5 1.5 0 0 0 1.6 2.2zm4.4-7.9L50.8 22l3.5.7c.5.1 1 0 1.4-.4l2.6-2.5.4 3.6c0 .5.3 1 .7 1.2l3.2 1.7-3.3 1.5c-.4.2-.8.6-.8 1l-.7 3.6-2.4-2.6a1.5 1.5 0 0 0-1.3-.5l-3.6.5 1.8-3.2c.2-.4.3-1 0-1.4zM99.1 37.8c-.3-.5-.8-.8-1.3-.8h-4l-2.4-3.4c-.3-.5-.8-.7-1.4-.6-.6 0-1 .4-1.2 1l-1.3 3.8-3.9 1.2a1.5 1.5 0 0 0-.4 2.6l3.2 2.4-.1 4a1.5 1.5 0 0 0 2.4 1.3l3.3-2.4 3.8 1.4a1.5 1.5 0 0 0 1.9-1.9l-1.2-3.8 2.4-3.2c.4-.5.4-1 .2-1.6zm-5.7 5 .5 1.7-1.7-.6c-.4-.2-1-.1-1.4.1l-1.4 1v-1.7c0-.5-.2-1-.6-1.3l-1.4-1 1.7-.5c.5-.2.9-.5 1-1l.6-1.7 1 1.5c.3.4.7.6 1.2.6h1.8l-1.1 1.5c-.3.4-.4.9-.2 1.3zM80.9 44.8c-.3 0-6.7-.5-11.8 4.2-4.2 3.8-6.2 9.8-6.2 17.7a1.5 1.5 0 0 0 3 0c0-7 1.7-12.2 5.2-15.5 4.1-3.8 9.5-3.5 9.5-3.5.9.1 1.6-.5 1.7-1.3 0-.9-.6-1.6-1.4-1.6z" />
							</svg>
						</div>
						<h3 className={styles.scheduleItemTitle}>19:00</h3>
						<h4 className={styles.scheduleItemDescription}>Volná zábava</h4>
					</div>
				</div>
			</Container>
		</div>
	)
}
