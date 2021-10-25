import {
    Button,
    Box,
    Text,
    VStack,
    Spacer,
    Image,
    HStack,
    Link,
    Flex
  } from "@chakra-ui/react"

import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import axios from 'axios'

export default function OnChangeResponse(props){
    

    console.log(props.response)
    if(props.response.length != 0){
        const options = props.response.data.map(r => (
            <div key={r.gameID}>
                <Link href={`/games/${r.gameID}`}>
                <Box key={r.gameID} borderWidth="1px" w="300px" h="75px">
                    <HStack>
                    <Box p={1} as="button" borderWidth="1px">
                    <Image
                        src={r.thumb}
                        alt={props.gameID}
                        h="60px" 
                        w="120px" />
                    </Box>
                    <Spacer />
                    <Box p="2">
                        <Text>{r.external} - {r.cheapest}</Text>
                    </Box>
                    </HStack>
                </Box>
                </Link>
            </div>
        ))
        return (
            <>
                <VStack>{options}</VStack>
            </>
        )
    }
    else{
        return (
            <>
            </>
        )
    }
}