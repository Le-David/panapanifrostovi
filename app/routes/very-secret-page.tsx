import { useLoaderData } from "@remix-run/react"
import { supabase } from "utils/supabase"

export const loader = async () => {
	const { data } = await supabase.from("ParticipationSubmission").select()
	return { data }
}

export default function VerySecretPage() {
	const { data } = useLoaderData<typeof loader>()
	// @TODO: schema

	return (
		<main>
			{data && data.length > 0 && (
				<ul>
					{data.map((submission) => (
						// @TODO: format data
						<li key={submission.id}>
							<ul>
								<li>Datum odeslání: {submission.created_at}</li>
								<li>
									Jméno a přijmení: {submission.firstname} {submission.lastname}
								</li>
								<li>Telefon: {submission.mobile}</li>
								<li>
									Zúčastní se: {submission.is_participating ? "ano" : "ne"}
								</li>
								<li>
									Jedná se o rodinu: {submission.is_family ? "ano" : "ne"} (
									{submission.participants})
								</li>
								<li>Poznámka: {submission.note}</li>
							</ul>
						</li>
					))}
				</ul>
			)}
		</main>
	)
}
