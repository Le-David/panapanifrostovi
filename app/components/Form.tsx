import { Form as FormComponent } from "@remix-run/react"
import type { FunctionComponent } from "react"
import styles from "./Form.module.css"

// export type FormProps = {}

export const Form: FunctionComponent = () => {
	return (
		<FormComponent className={styles.wrapper} method="post">
			<h2>
				A to nejdulezitejsi na konec? Muzeme s tebou/s vámi na 100% pocitat?
			</h2>
			<h3>Prosime o potvrzeni ucasti a to do 30.6.2024.</h3>
			<div className={styles.group}>
				<label className={styles.label}>
					<div className={styles.labelText}>Křestní jméno:</div>
					<input
						className={styles.input}
						type="text"
						name="firstname"
						autoComplete="given-name"
						required
					/>
				</label>
				<label className={styles.label}>
					<div className={styles.labelText}>Přijmení:</div>
					<input
						className={styles.input}
						type="text"
						name="lastname"
						autoComplete="family-name"
						required
					/>
				</label>
			</div>
			<label className={styles.label}>
				<div className={styles.labelText}>Mobil:</div>
				<input
					className={styles.input}
					type="tel"
					name="telephone"
					autoComplete="tel"
					required
				/>
			</label>
			<fieldset className={styles.fieldset}>
				<label className={styles.labelRadio}>
					<input
						className={styles.inputRadio}
						type="radio"
						name="participation"
						value="yes"
						required
					/>
					Moc rád/a dorazím 👍
				</label>
				<label className={styles.labelRadio}>
					<input
						className={styles.inputRadio}
						type="radio"
						name="participation"
						value="no"
						required
					/>
					Bohužel se neúčastním 🫣
				</label>
			</fieldset>
			<label className={styles.label}>
				<div className={styles.labelText}>Počet účastníků:</div>
				<input
					className={styles.input}
					type="number"
					name="participants"
					min={0}
					defaultValue={0}
				/>
			</label>
			<label className={styles.label}>
				<div className={styles.labelText}>Vzkaz/poznámka:</div>
				<textarea className={styles.textarea} name="note" />
			</label>
			<button className={styles.submit} type="submit">
				Odeslat
			</button>
		</FormComponent>
	)
}
