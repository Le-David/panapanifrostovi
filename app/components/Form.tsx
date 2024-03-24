import { Form as FormComponent } from "@remix-run/react"
import clsx from "clsx"
import type { FunctionComponent } from "react"
import styles from "./Form.module.css"

// export type FormProps = {}

export const Form: FunctionComponent = () => {
	return (
		<FormComponent className={styles.wrapper} method="post">
			<h2>
				A to nejdůležitější na konec?
				<br />
				Můžeme s tebou na 100 % počítat?
			</h2>
			<h3>Prosíme o potvrzení účasti a to do 30.6.2024.</h3>
			<div className={styles.main}>
				<div className={styles.group}>
					<label className={styles.label}>
						<div className={styles.labelText}>Jméno</div>
						<input
							className={styles.input}
							type="text"
							name="firstname"
							autoComplete="given-name"
							placeholder="David"
							required
						/>
					</label>
					<label className={styles.label}>
						<div className={styles.labelText}>Přijmení</div>
						<input
							className={styles.input}
							type="text"
							name="lastname"
							autoComplete="family-name"
							placeholder="Frost"
							required
						/>
					</label>
				</div>
				<label className={styles.label}>
					<div className={styles.labelText}>Telefonní číslo</div>
					<input
						className={styles.input}
						type="tel"
						name="mobile"
						autoComplete="tel"
						placeholder="123456789"
					/>
				</label>
				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Tak jak?</legend>
					<label className={styles.labelRadio}>
						<input
							className={styles.inputRadio}
							type="radio"
							name="participation"
							value="yes"
							required
						/>
						<span className={clsx(styles.labelText, styles.is_bigger)}>
							Přijdu 🌿
						</span>
					</label>
					<label className={styles.labelRadio}>
						<input
							className={styles.inputRadio}
							type="radio"
							name="participation"
							value="no"
							required
						/>
						<span className={clsx(styles.labelText, styles.is_bigger)}>
							Nepřijdu 😔
						</span>
					</label>
				</fieldset>
				<label className={styles.label}>
					<div className={styles.labelText}>Pole pro dotazy</div>
					<textarea
						className={styles.textarea}
						name="note"
						placeholder="Napište nám - prostor pro jakékoliv dotazy"
					/>
				</label>
				<button className={styles.submit} type="submit">
					Odeslat
				</button>
			</div>
		</FormComponent>
	)
}
