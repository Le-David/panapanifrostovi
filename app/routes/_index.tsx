import { ActionFunctionArgs, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import clsx from "clsx"
import "collapsible-react-component/dist/index.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { supabase } from "utils/supabase"
import { BackgroundImage } from "~/components/BackgroundImage"
import { Ceremony } from "~/components/Ceremony"
import { Container } from "~/components/Container"
import { Dresscode } from "~/components/Dresscode"
import { Form } from "~/components/Form"
import { Gift } from "~/components/Gift"
import { Hero } from "~/components/Hero"
import { Map } from "~/components/Map"
import { OurStory } from "~/components/OurStory"
import { Parking } from "~/components/Parking"
import { Schedule } from "~/components/Schedule"
import styles from "../styles/routes/Home.module.css"

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

	const mutation = await supabase.from("ParticipationSubmission").insert({
		firstname: formData.get("firstname")?.toString(),
		lastname: formData.get("lastname")?.toString(),
		is_participating: formData.get("participation") ? true : false,
		mobile: formData.get("mobile")?.toString(),
		note: formData.get("note")?.toString(),
	})

	return {
		...mutation,
	}
}

export const loader = async () => {
	return json({
		GOOGLE_API_MAP_KEY: process.env.GOOGLE_API_MAP_KEY,
	})
}

export default function Index() {
	const { GOOGLE_API_MAP_KEY: googleMapsApiKey } =
		useLoaderData<typeof loader>()

	!googleMapsApiKey && console.log("No Google Maps API key provided")
	return (
		<main className={styles.wrapper}>
			<Hero />
			<section className={clsx(styles.section, styles.is_story)}>
				<OurStory />
			</section>
			<section className={styles.section}>
				<Ceremony />
			</section>
			<section className={styles.section}>
				<BackgroundImage />
			</section>
			<section className={clsx(styles.section, styles.is_info)}>
				<Container>
					<p className={styles.infoText}>Obřad proběhne ve 12:30 hodin</p>
					<p className={styles.infoText}>
						Prosíme o příjezd svatebčanů zhruba mezi <br />
						11:30 - 12:00
					</p>
				</Container>
			</section>
			<section className={clsx(styles.section, styles.is_schedule)}>
				<Schedule />
			</section>
			<section className={styles.section}>
				<BackgroundImage type="second" />
			</section>
			{googleMapsApiKey && (
				<section className={clsx(styles.section, styles.is_map)}>
					<Map googleMapsApiKey={googleMapsApiKey ?? ""} />
				</section>
			)}
			<section className={clsx(styles.section, styles.is_parking)}>
				<Parking />
			</section>
			<section className={clsx(styles.section, styles.is_dresscode)}>
				<Dresscode />
			</section>
			<section className={clsx(styles.section, styles.is_gift)}>
				<Gift />
			</section>
			<section className={styles.section}>
				<Form />
			</section>
			<ToastContainer position="top-center" theme="colored" />
		</main>
	)
}
