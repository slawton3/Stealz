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

export default function AllGameDeals( gameData ){
    console.log(gameData)
    return (
        <></>
        /*<Box
            key={gameData.deals.dealID}
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
        </Box>
        <Box>
            <Text>{gameData.deals.price}</Text>
        </Box>
        </Box>
*/
    )
    
}