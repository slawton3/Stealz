import {
    Box,
    Button,
    HStack,
    Spacer,
    useColorMode,
    Flex,
    Link
  } from "@chakra-ui/react"

import { SunIcon } from '@chakra-ui/icons'

import { FaFacebook, FaTwitter } from 'react-icons/fa'


export default function SocialButtons(){

    const { toggleColorMode } = useColorMode();

    return (
        <Box p="2" alignItems="center">
            <HStack>
                <Link href="https://www.facebook.com/profile.php?id=100056435991577" isExternal="true">
                    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                            Facebook
                    </Button>
                </Link>
                <Link href="https://twitter.com/stealzgg" isExternal="true">
                    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                            Twitter
                    </Button>
                </Link>
                <Spacer />
                <Button onClick={toggleColorMode}><SunIcon /></Button>
            </HStack>
        </Box>
    )
}
