import {
    Box,
    Center
  } from "@chakra-ui/react"

import { StarIcon } from '@chakra-ui/icons'


export default function GameRating(props){
    return (
        <Center>
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
                
              <StarIcon
                key={i}
                color={i < (parseInt(props.steamRatingPercent)/20) ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" fontSize="sm">
            {props.steamRatingCount} reviews
          </Box>
          <Box as="span" ml="2" fontSize="sm">
            {parseInt(props.metacriticScore) != 0 ? `Metacritic Score: ${props.metacriticScore}` : "Metacritic Score: N/A"}
          </Box>
        </Box>
        </Center>
    )
}
