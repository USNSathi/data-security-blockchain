import { Chain } from "@blockchain/index"
import "@styles/globals.css"
import "animate.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Link from "next/link"

export const Links = {
	App: {
		home: "/",
		blockchainGraph: "/blockchain-graph",
	},
	API: {
		add: {
			newnode: "/api/add/newnode",
		},
	},
}

export const Device = {
	Category: {
		Provider: "provider",
		Consumer: "consumer",
	},
	Type: {
		Satellite: "Satellite",
		GroundStation: "Ground_Station",
		PhasedArrayAntenna: "Phased_Array_Antenna",
		Mobile: "Mobile",
		Aircraft: "Aircraft",
		Vehicle: "Vehicle",
		Watercraft: "Watercraft",

	},
}

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta httpEquiv="X-UA-Compatible" content="IE=7" />

				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default App
