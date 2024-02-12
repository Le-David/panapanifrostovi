import { useLoaderData } from "@remix-run/react"
import { supabase } from "utils/supabase"
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

export const loader = async () => {
	const { data } = await supabase.from("test").select()

	return { data }
}

export default function Index() {
	const { data } = useLoaderData<typeof loader>()
	return (
		<main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<Hero />
		</main>
	)
}
