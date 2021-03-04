import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css"
<<<<<<< HEAD
import customTheme from "../styles/theme"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
=======
import theme from "../styles/theme"

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
>>>>>>> 85cee068644f3dbd47908abe26faa2f8af904e07
		</ChakraProvider>
	)
}

export default MyApp
