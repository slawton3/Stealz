import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Link
  } from "@chakra-ui/react"

  import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function LinkBoxModal(props){
    const link = `https://www.cheapshark.com/redirect?dealID=${props.id}`
    return (
        <Popover>
            <PopoverTrigger>
                <Button colorScheme="teal">Get it Now!</Button>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Link to Game:</PopoverHeader>
                <PopoverBody><Link href={link} isExternal="true">{props.linkName} <ExternalLinkIcon /></Link></PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
