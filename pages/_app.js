import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css"
import customTheme from "../styles/theme"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
