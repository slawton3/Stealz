import {
    Stack,
    Text
  } from "@chakra-ui/react"


export default function Footer(props){

    const date = new Date().getFullYear()

    return (
            <Stack
            direction="row"
            width="full"
            height="75px"
            justify="space-between"
            >
            <Text
                paddingTop="25px"
                paddingLeft="20px"
                align="left"
            >
                Stealz&copy; {date}
            </Text>

            <Text
                paddingTop="25px"
                paddingRight="20px"
                align="right"
            >
                Contact: seanlawton3@gmail.com
            </Text>
            </Stack>
    );
    
}
