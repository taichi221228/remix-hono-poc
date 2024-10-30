import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import style from "~/style.css?url";

import "@fontsource-variable/josefin-sans";

/** @private */
export const links: LinksFunction = () => [{ rel: "stylesheet", href: style }];

/** @private */
export function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

/** @private */
export default function App() {
	return <Outlet />;
}
