const axios = require('axios')
import { Box,
         Center, 
         Heading,
         SimpleGrid,
         Spacer,
         Text,
         Flex,
         HStack
         } from "@chakra-ui/react";
import { VscFlame } from "react-icons/vsc";
import DealBox from '../components/Games/DealBox'
import SocialButtons from '../components/Base/SocialMediaBanner'
import SearchComponent from '../components/Games/SearchComponent'
import Footer from '../components/Base/Footer'
import SiteMenu from '../components/Base/Menu'
import EmailNotificationButton from '../components/Base/EmailNotificationForm'
import Image from 'next/image'
import flameGif from '../assets/flame.gif'


export default function DealsList({data, stores}){

    const gif = <Image src={flameGif} alt='flame gif' height="50" width="50"/>
    
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
                    New Deal Notifications <br />
                    </Heading>
                    <Center><EmailNotificationButton /></Center>
                </Box>
            </HStack>
            </Box>
            </Center>
                    <Box mt={6}>
                    <Heading>
                        <Center>
                            {gif}<Text fontSize="3xl" ml={4}>Hottest Deals</Text>{gif}
                        </Center>
                    </Heading>
                    <SimpleGrid columns={[2, 2, 2, 3]} spacing={5} p={4}>
                        {data.map((deal) => (
                            <DealBox key={deal.dealID} {...deal}/>
                        ))}
                    </SimpleGrid>
                    </Box>
                
                <Footer />
            </>  
        )
}

function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return -1;  
       else if(a[property] < b[property])  
          return 1;  
   
       return 0;  
    }  
 }

export async function getServerSideProps(){
    try{
        const res = await axios.get('https://www.cheapshark.com/api/1.0/deals')
        const data = res.data

        const storesRes = await axios.get('https://www.cheapshark.com/api/1.0/stores')
        const stores = storesRes.data

        data.sort(sortByProperty("steamRatingCount"))
        return { props: { data, stores }}
    }
    catch(err){
        console.log(err)
    }

}