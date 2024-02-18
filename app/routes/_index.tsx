import { ActionFunctionArgs } from "@remix-run/node"
import { supabase } from "utils/supabase"
import { Form } from "~/components/Form"
import { Hero } from "~/components/Hero"

export function headers({
	loaderHeaders,
	parentHeaders,
}: {
	loaderHeaders: Headers
	parentHeaders: Headers
}) {
	console.log(
		"This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
	)
	return {
		// This is an example of how to set caching headers for a route
		// For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
		"Cache-Control": "public, max-age=60, s-maxage=60",
	}
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()

	// @TODO: other fields
	const mutation = await supabase.from("ParticipationSubmission").insert({
		firstname: formData.get("firstname")?.toString(),
		lastname: formData.get("lastname")?.toString(),
	})

	// @TODO: handle success/errors
	console.log("============= Log - start =============")
	console.log("mutation: ", mutation)
	console.log("============= Log - end =============")

	// return {
	// 	...mutation,
	// }
	return null
}

export default function Index() {
	return (
		<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<Hero />
			<Form />
		</main>
	)
}
