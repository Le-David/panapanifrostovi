import { ActionFunctionArgs } from "@remix-run/node"
import clsx from "clsx"
import { supabase } from "utils/supabase"
import { BarnImage } from "~/components/BarnImage"
import { Ceremony } from "~/components/Ceremony"
import { Container } from "~/components/Container"
import { Dresscode } from "~/components/Dresscode"
import { Form } from "~/components/Form"
import { Hero } from "~/components/Hero"
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
		<main
			className={styles.wrapper}
			style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
		>
			<Hero />
			<section className={clsx(styles.section, styles.is_story)}>
				<OurStory />
			</section>
			<section className={styles.section}>
				<Ceremony />
			</section>
			<section className={styles.section}>
				<BarnImage />
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
				<BarnImage />
			</section>
			<section className={clsx(styles.section, styles.is_parking)}>
				<Parking />
			</section>
			<section className={clsx(styles.section, styles.is_dresscode)}>
				<Dresscode />
			</section>
			<section className={styles.section}>
				<Form />
			</section>
		</main>
	)
}
