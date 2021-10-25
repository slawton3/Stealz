const axios = require('axios')
import { Box,
         Center, 
         Heading,
         Flex,
         HStack
         } from "@chakra-ui/react";
import SocialButtons from '../../components/Base/SocialMediaBanner'
import SearchComponent from '../../components/Games/SearchComponent'
import Footer from '../../components/Base/Footer'
import SiteMenu from '../../components/Base/Menu'
import EmailNotificationButton from '../../components/Base/EmailNotificationForm'
import ContactForm from '../../components/Forms/ContactForm'


export default function GamePage({props}){
    return (<>
            <SocialButtons />
            <Center>
            <Box w="100%" m={2}>
                <HStack>
                    <Flex w="25%" justifyContent="flex-end"><SearchComponent /></Flex>
                    <Box w="50%">
                        <Heading as="h1" size="xl" textAlign="center" m={2}>
                                Find your Stealz
                        </Heading>
                    </Box>
                    <Flex w="25%" justifyContent="flex-start">
                        <SiteMenu />
                    </Flex>
                </HStack> 
            </Box>
            </Center>
            <Center>
            <Box display={{ md: "flex" }}>
            <HStack>
                <Box>
                    <Heading as="h2" size="2" mb={2}>
                    Contact Me! <br />
                    </Heading>
                </Box>
            </HStack>
            </Box>
            </Center>
            <Box mt={6}>
                <Center>
                    <ContactForm />
                </Center>
            </Box>
            <Footer />
            </>  
        )
}