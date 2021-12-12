const axios = require('axios')
import { useRouter } from 'next/router'
import { Box,
         Badge, 
         Skeleton,
         SimpleGrid,
         Image,
         Text,
         Flex,
         HStack
         } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import LinkBoxModal from '../Base/LinkBoxModal';

export default function AllGameDeals( gameProps ){
    const gameData = gameProps.gameData
    const storeData = gameProps.storeData

    const [dealArr, setdealArr] = useState([])
    
    useEffect(() => {
        const getDeal = () => gameData.deals.forEach((deal) => {
            const imageSrc = `https://www.cheapshark.com/img/stores/icons/${(parseInt(deal.storeID)-1)}.png`
            deal.imageSrc = imageSrc
            console.log(deal.storeID)
            const storeName = storeData.filter(e => {
                if(e.storeID === deal.storeID){
                    deal.storeName = e.storeName
                }
            })
            
            console.log(deal)
            setdealArr(oldArr => [...oldArr, deal])
        })
        getDeal()
    }, [])
    console.log(dealArr)

    return (
        <>
        {dealArr.map(gameDeal => (  
            <div key={gameDeal.dealID}>
                <Box
                    key={gameDeal.dealID}
                    display={{ md: "flex" }}
                    boxShadow="dark-lg"
                    p={4}
                    >               
                    
                <Box flexShrink={0}>
                    <Image borderRadius="lg"
                        width={{ md: 40 }}
                        height={{ md: 20 }}
                        src={gameData.info.thumb}
                        alt={gameData.info.title} />
                    <Box>
                    <Image loading="lazy" src={gameDeal.imageSrc} alt={gameDeal.external}></Image>
                    <Text 
                        size={{sm: 0.5, md: 1, lg: 1}}
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        display="block">{gameDeal.storeName}
                    </Text>
                    </Box>
                    
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
                            {gameData.info.title}
                    </Text>
                    <Text as="s" colorScheme="red.500">
                            ${gameDeal.retailPrice}
                    </Text>
                    <Badge borderRadius="full" px={{sm: 1, md: 2, lg: 2}} fontSize="1em" colorScheme="teal" ml={1}>
                        
                        <Text as="em">
                            ${gameDeal.price}!
                        </Text>
                    </Badge>
                <Box mt="2"><Skeleton startColor="green.500" endColor="cyan.400" height="5px" /></Box>
                <Box mt="4"><LinkBoxModal id={gameDeal.dealID} linkName={gameData.info.title}/></Box>
            </Box>
            </Box>
    </div>
        ))}
        </>
        
    )
    
}