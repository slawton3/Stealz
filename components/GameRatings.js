import {
    Box,
    HStack,
    Center
  } from "@chakra-ui/react"

import { StarIcon } from '@chakra-ui/icons'


export default function GameRating(props){
    return (
        <HStack>
        <Box>
          {Array(5)
            .fill("")
            .map((_, i) => (
                
              <StarIcon
                key={i}
                color={i < (parseInt(props.steamRatingPercent)/20) ? "teal.500" : "gray.300"}
              />
            ))}
          <Box>
            {props.steamRatingCount} reviews
          </Box>
          <Box>
            {parseInt(props.metacriticScore) != 0 ? `Metacritic Score: ${props.metacriticScore}` : "Metacritic Score: N/A"}
          </Box>
        </Box>
        </HStack>
    )
}
