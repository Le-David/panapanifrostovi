import type { LinksFunction } from "@netlify/remix-runtime"
import { cssBundleHref } from "@remix-run/css-bundle"
import type { MetaFunction } from "@remix-run/node"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react"

export const meta: MetaFunction = () => [
	{
		charset: "utf-8",
		title: "Pan & Paní Frostovi",
	},
]

import globalStyles from "./styles/global.css"

export const links: LinksFunction = () => [
	...(cssBundleHref
		? [
				{ rel: "stylesheet", href: cssBundleHref },
				{
					rel: "stylesheet",
					href: globalStyles,
				},
		  ]
		: []),
]

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
