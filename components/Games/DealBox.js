import { Box,
         Badge, 
         Image,
         Center, 
         Heading,
         Skeleton,
         HStack,
         Stack,
         Text
         } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import LinkBoxModal from '../Base/LinkBoxModal'
import GameRating from './GameRatings'



export default function DealBox(props){
   return (  <div key={props.dealID}>
                        <Box
                            key={props.dealID}
                            display={{ md: "flex" }}
                            boxShadow="dark-lg"
                            p={4}
                            >
                            
                        <Box flexShrink={0}>
                            <Image borderRadius="lg"
                                loading="lazy"
                                width={{ md: 40 }}
                                height={{ md: 20 }}
                                src={props.thumb}
                                alt={props.title} />

                            
                        </Box>
                        <Box
                            mt={{ base: 4, md: 0 }}
                            ml={{ md: 6 }}
                            >
                            <Text 
                                size={{sm: 0.5, md: 1, lg: 1}}
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                display="block">
                                    {props.title}
                            </Text>
                            <Text as="s" colorScheme="red.500">
                                    ${props.normalPrice}
                            </Text>
                            <Badge borderRadius="full" px={{sm: 1, md: 2, lg: 2}} fontSize="1em" colorScheme="teal" ml={1}>
                                
                                <Text as="em">
                                    ${props.salePrice}!
                                </Text>
                            </Badge>
                        <GameRating steamRatingPercent={props.steamRatingPercent} steamRatingCount={props.steamRatingCount} metacriticScore={props.metacriticScore} imageSrcLink={props.storeID} />
                        <Box mt="2"><Skeleton startColor="green.500" endColor="cyan.400" height="5px" /></Box>
                        <Box mt="4"><LinkBoxModal id={props.dealID} linkName={props.title}/></Box>
                    </Box>
                    </Box>
                </div>
                )
    }