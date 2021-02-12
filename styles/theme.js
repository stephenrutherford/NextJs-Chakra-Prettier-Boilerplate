import { extendTheme } from "@chakra-ui/react"

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
	transparent: "transparent",
	black: "#000",
	white: "#fff",
	blue: "#00abe9",
}

const theme = extendTheme({ config })

export default theme
