const axios = require('axios')
import { Box,
         Badge, 
         Image,
         ScaleFade, 
         Center, 
         Heading,
         Skeleton,
         } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import LinkBoxModal from '../components/LinkBoxModal'
import GameRating from '../components/GameRatings'
import SocialButtons from '../components/SocialMediaBanner'
import Footer from '../components/Footer'
import EmailNotificationButton from '../components/EmailNotificationForm'



export default function DealsList({data}){

    return (<>
            <SocialButtons />
            <Center>
            <Box w={500} p={4} m="20px auto" mb="2">
                
                <Heading as="h1" size="xl" textAlign="center">
                    Find your Stealz
                </Heading>
                <Heading as="h2" size="l" textAlign="center" m={5}>
                &bull;The best game deals on the Internet&bull; <br />
                &bull;Live feed of the hottest new deals&bull;<br />
                
                </Heading>
                <Center><EmailNotificationButton /></Center>
                </Box>
                </Center>
                {data.map((deal) => (
                    <div key={deal.dealID}>
                        <Center>
                        <Box width="lg" 
                            borderWidth="1px"
                            boxShadow="dark-lg"
                            p="6" 
                            mb="2" 
                            rounded="lg" 
                            overflow="hidden"
                            >
                        <motion.div 
                            w="50%"
                            className="hoverMotion"
                            whileHover={{
                                scale: 1.1,
                            }}>
                            
                         
                        <Box
                            mt="1" 
                            ml = "2"
                            mr = "2"
                            p={3}
                            fontWeight="semibold"
                            lineHeight="tight"
                            isTruncated
                            textAlign="center"
                            >
                            <Heading size="l">{deal.title}</Heading>
                        </Box>
                    
                        <Center><Image src={deal.thumb} alt={deal.title} /></Center>
                        <Center><Box p="6" textAlign="center">
                            <Box d="flex" alignItems="baseline">
                            <Badge
                                fontSize="1em"
                                colorScheme="orange"
                                borderRadius="full"
                                px="2"
                                letterSpacing="wide">SAVE ${parseInt(deal.normalPrice) - parseInt(deal.salePrice)}!
                            </Badge>
                            <Badge borderRadius="full" px="2" ml="2" fontSize="1em" colorScheme="teal">
                                Sale Price: ${deal.salePrice} 
                            </Badge>
                            <Box
                                color="white.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                               Normal Price: ${deal.normalPrice}
                            </Box>
                            
                        </Box>
                        <GameRating steamRatingPercent={deal.steamRatingPercent} steamRatingCount={deal.steamRatingCount} metacriticScore={deal.metacriticScore} />
                        <Box mt="2"><Skeleton startColor="green.500" endColor="cyan.400" height="5px" /></Box>
                        <Box mt="4"><LinkBoxModal id={deal.dealID} linkName={deal.title}/></Box>
                    </Box>
                    </Center>
                    </motion.div>
                    </Box>
                    </Center>
                    </div>
                ))}
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
        console.log(data)
        data.sort(sortByProperty("steamRatingCount"))
        return { props: { data }}
    }
    catch(err){
        console.log(err)
    }
}