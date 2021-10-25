import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
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
                <Link href="/">
                    <MenuItem>
                        Home
                    </MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem>
                        Get Your Game Featured
                    </MenuItem>
                </Link>
                <Link href="/contact">
                    <MenuItem>
                        Contact
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
    
}