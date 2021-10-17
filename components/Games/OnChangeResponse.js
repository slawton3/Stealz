import {
    Button,
    Box,
    Text,
    VStack,
    Spacer,
    Image,
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
            <Link href={`/games/${r.gameID}`}>
            <Flex key={r.gameID} borderWidth="1px">
                <Box p="2" as="button" borderWidth="1px">
                <Image
                    src={r.thumb}
                    alt={props.gameID}
                    width={{ md: 20 }}
                    height={{ md: 10 }} />
                </Box>
                <Spacer />
                <Box p="2">
                    <Text>{r.external} - {r.cheapest}</Text>
                </Box>
            </Flex>
            </Link>
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