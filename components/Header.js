import {
	Heading,
	Flex,
	Spacer,
	useColorMode,
	IconButton,
	Tooltip,
	Link,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

function Header() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex p={0} alignItems='center'>
			<Heading
				fontSize='xl'
				ml='2'
				color={colorMode === "light" ? "gray.600" : "gray.200"}
			>
				<Link
					href='/'
					style={{
						color: "inherit",
						textDecoration: "inherit",
						letterSpacing: "0.4rem",
					}}
				>
					Your Website
				</Link>
			</Heading>
			<Spacer />
			<Tooltip hasArrow label='Night/Day Mode!' defaultIsOpen>
				<IconButton
					aria-label='Color Mode Button'
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					onClick={toggleColorMode}
					variant='outline'
				/>
			</Tooltip>
		</Flex>
	)
}

export default Header
