const axios = require('axios')
import { useRouter } from 'next/router'
import { Box,
         Center, 
         Heading,
         SimpleGrid,
         Image,
         Text,
         Flex,
         HStack
         } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import SocialButtons from '../../components/Base/SocialMediaBanner'
import SearchComponent from '../../components/Games/SearchComponent'
import Footer from '../../components/Base/Footer'
import SiteMenu from '../../components/Base/Menu'
import EmailNotificationButton from '../../components/Base/EmailNotificationForm'
import AllGameDeals from '../../components/Games/AllGameDeals';



export default function GamePage({ gameData, storeData }){
    const gameProps = {
        gameData: gameData,
        storeData: storeData
    }
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
                    <Heading as="h2" size="2">
                    New Deal Notifications <br />
                    </Heading>
                    <Center><EmailNotificationButton /></Center>
                </Box>
            </HStack>
            </Box>
            </Center>
                    <Box mt={8}>
                    <Heading>
                        <Center>
                            <Text align="center" fontSize="3xl" ml={4}>Best Deals for {gameData.info.title}</Text>
                        </Center>
                    </Heading>
                    </Box>
                    <Box>
                        <SimpleGrid columns={[2, 2, 2, 3]} spacing={5} p={4}>
                            <AllGameDeals key={gameData.deals.dealID} {...gameProps}/>
                        </SimpleGrid>
                    </Box>
                <Footer />
            </>  
        )
}

export async function getServerSideProps(context) {
    const gameID = context.query.id;
    const res = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
    const gameData = res.data
    const storeRes = await axios.get('https://www.cheapshark.com/api/1.0/stores')
    const storeData = storeRes.data
    return { props: { gameData, storeData } };
  }