import dotenv from "dotenv"
import { $ } from "zx"

dotenv.config({ path: process.cwd() + ".env" })

async function main() {
	const projectId = process.env.SUPABASE_PROJECT_ID
	const outputDir = "generated/supabase.types.ts"

	if (!projectId) {
		throw new Error("Project ID is not set")
	}

	console.log("=== Generating schema ===")
	await $`npx supabase gen types typescript --project-id "${projectId}" --schema public > ${outputDir}`
	console.log("=== The schema is successfully generated ===")
}

main()
