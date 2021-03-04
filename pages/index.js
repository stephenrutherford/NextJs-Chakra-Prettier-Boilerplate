import Head from "next/head"
import {
	Flex,
	Code,
	Heading,
	Text,
	Link,
	SimpleGrid,
	Box,
} from "@chakra-ui/react"

export default function Home() {
	return (
		<Flex>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex flexDirection='column' mt={6}>
				<Flex flexDirection='column' alignItems='center'>
					<Heading>
						Welcome to{" "}
						<Link href='https://nextjs.org/' isExternal>
							Next.js!
						</Link>
					</Heading>
					<Flex justifyContent='center' alignItems='center' mt={4}>
						<Text>Get started by editing </Text>
						<Code>pages/index.js</Code>
					</Flex>
				</Flex>
				<SimpleGrid columns={2} spacing={10} mt={6}>
					<Box
						height='200px'
						borderRadius='lg'
						border='1px'
						borderColor='gray.200'
						p={4}
					>
						<Link href='https://nextjs.org/docs'>
							<Heading size='md'>Documentation &rarr;</Heading>
							<Text>
								Find in-depth information about Next.js features and API.
							</Text>
						</Link>
					</Box>
					<Box
						height='200px'
						borderRadius='lg'
						border='1px'
						borderColor='gray.200'
						p={4}
					>
						<Link href='https://nextjs.org/learn'>
							<Heading size='md'>Learn &rarr;</Heading>
							<Text>
								Learn about Next.js in an interactive course with quizzes!
							</Text>
						</Link>
					</Box>{" "}
					<Box
						height='200px'
						borderRadius='lg'
						border='1px'
						borderColor='gray.200'
						p={4}
					>
						<Link href='https://github.com/vercel/next.js/tree/master/examples'>
							<Heading size='md'>Examples &rarr;</Heading>
							<Text>
								Discover and deploy boilerplate example Next.js projects.
							</Text>
						</Link>
					</Box>{" "}
					<Box
						height='200px'
						borderRadius='lg'
						border='1px'
						borderColor='gray.200'
						p={4}
					>
						<Link href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
							<Heading size='md'>Deploy &rarr;</Heading>
							<Text>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</Text>
						</Link>
					</Box>{" "}
				</SimpleGrid>
			</Flex>
		</Flex>
	)
}
