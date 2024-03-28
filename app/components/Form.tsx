import { Form as FormComponent, useActionData } from "@remix-run/react"
import clsx from "clsx"
import {
	FormEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState,
	type FunctionComponent,
} from "react"
import { toast } from "react-toastify"
import { action } from "~/routes/_index"
import styles from "./Form.module.css"

// export type FormProps = {}

export const Form: FunctionComponent = () => {
	const data = useActionData<typeof action>()
	const formRef = useRef<HTMLFormElement>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(() => {
		setIsSubmitting(true)
	}, [])

	useEffect(() => {
		if (data) {
			setIsSubmitting(false)
		}

		if (data && data.status >= 200 && data?.status <= 299) {
			toast.success("Formulář se úspěšně odeslal, díky!")
			formRef.current?.reset()
		}

		if ((data && data?.status >= 400 && data?.status <= 500) || data?.error) {
			toast.error(
				"Něco se nepovedlo, zkuste obnovit stránku a odeslat formulář znovu!"
			)
		}
	}, [data])
	return (
		<FormComponent
			className={styles.wrapper}
			method="post"
			onSubmit={handleSubmit}
			ref={formRef}
		>
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
				<button
					className={clsx(styles.submit, isSubmitting && styles.is_submitting)}
					disabled={isSubmitting}
					type="submit"
				>
					Odeslat
				</button>
			</div>
		</FormComponent>
	)
}
