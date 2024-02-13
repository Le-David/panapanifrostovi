import { useLoaderData } from "@remix-run/react"
import { supabase } from "utils/supabase"

export const loader = async () => {
	const { data } = await supabase.from("ParticipationSubmission").select()
	return { data }
}

export default function VerySecretPage() {
	const data = useLoaderData<typeof loader>()
	// @TODO: schema

	return (
		<main>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</main>
	)
}
