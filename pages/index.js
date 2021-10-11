const axios = require('axios')
import { Box,
         Center, 
         Heading,
         SimpleGrid,
         Spacer,
         HStack
         } from "@chakra-ui/react";
import { VscFlame } from "react-icons/vsc";
import DealBox from '../components/DealBox'
import SocialButtons from '../components/SocialMediaBanner'
import SearchComponent from '../components/SearchComponent'
import Footer from '../components/Footer'
import SiteMenu from '../components/Menu'
import EmailNotificationButton from '../components/EmailNotificationForm'



export default function DealsList({data, stores}){
    console.log(stores)
    return (<>
            <SocialButtons />
            <Center>
            <Box w="100%" m={2}>
                <HStack>
                    <Box w="25%" />
                    <Box w="50%">
                        <Heading as="h1" size="xl" textAlign="center" m={2}>
                                Find your Stealz
                        </Heading>
                    </Box>
                    <Box w="25%">
                        <SiteMenu />
                    </Box>
                </HStack> 
            </Box>
            </Center>
            <Center>
            <Box display={{ md: "flex" }}>
            <HStack>
                <Box>
                    <Heading as="h2" size="2">
                    New Deal Notifications <br />
                    </Heading>
                    <Center><EmailNotificationButton /></Center>
                </Box>
                <Spacer />
                <Box>
                    <Heading as="h2" size="2">
                        Find a game:
                    </Heading>
                    <SearchComponent />
                </Box>
            </HStack>
            </Box>
            </Center>
                    <Box>
                    <Heading>
                        <Center>
                            <VscFlame />Current Featured Deals<VscFlame />
                        </Center>
                    </Heading>
                    <SimpleGrid columns={[2, 2, 2, 3]} spacing={5} p={4}>
                        {data.map((deal) => (
                            <DealBox {...deal}/>
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

export async function getStaticProps(){
    try{
        const res = await axios.get('https://www.cheapshark.com/api/1.0/deals')
        const data = res.data

        const storesRes = await axios.get('https://www.cheapshark.com/api/1.0/stores')
        const stores = storesRes.data

        //data.sort(sortByProperty("steamRatingCount"))
        return { props: { data, stores }}
    }
    catch(err){
        console.log(err)
    }

}