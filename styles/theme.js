import { extendTheme } from "@chakra-ui/react"

<<<<<<< HEAD
const colors = {
	transparent: "transparent",
	black: "#000",
	white: "#fff",
}

const customTheme = extendTheme({ colors })

export default customTheme
=======
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
>>>>>>> 85cee068644f3dbd47908abe26faa2f8af904e07
