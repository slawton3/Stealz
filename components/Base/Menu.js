import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'

export default function SiteMenu(){
    return (
        <Menu>
            <MenuButton
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                <MenuItem>
                    Get Your Game Featured
                </MenuItem>
                <MenuItem>
                    Contact
                </MenuItem>
            </MenuList>
        </Menu>
    )
    
}