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
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />
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
