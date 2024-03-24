import { useLoaderData } from "@remix-run/react"
import clsx from "clsx"
import { useCallback } from "react"
import { supabase } from "utils/supabase"
import styles from "../styles/routes/very-secret-page.module.css"

export const loader = async () => {
	const { data } = await supabase.from("ParticipationSubmission").select()
	return { data }
}

export default function VerySecretPage() {
	const { data } = useLoaderData<typeof loader>()
	const handleDate = useCallback((date: string) => {
		return new Date(date).toLocaleDateString("cs-CZ")
	}, [])
	// @TODO: schema

	return (
		<main className={styles.wrapper}>
			<h2>Tabulka</h2>
			{data && data.length > 0 && (
				<table className={styles.table}>
					<thead>
						<tr>
							<th className={clsx(styles.cell, styles.is_heading)}>
								Datum odeslání
							</th>
							<th className={clsx(styles.cell, styles.is_heading)}>
								Jméno a přijmení
							</th>
							<th className={clsx(styles.cell, styles.is_heading)}>Telefon</th>
							<th className={clsx(styles.cell, styles.is_heading)}>
								Zúčastní se
							</th>
							<th className={clsx(styles.cell, styles.is_heading)}>Poznámka</th>
						</tr>
					</thead>
					<tbody>
						{data.map((submission) => (
							<tr key={submission.id}>
								<td className={clsx(styles.cell)}>
									{handleDate(submission.created_at)}
								</td>
								<td className={clsx(styles.cell)}>
									{submission.firstname} {submission.lastname}
								</td>
								<td className={clsx(styles.cell)}>{submission.mobile}</td>
								<td className={clsx(styles.cell)}>
									{submission.is_participating ? "ano" : "ne"}
								</td>
								<td className={clsx(styles.cell)}>{submission.note}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</main>
	)
}
