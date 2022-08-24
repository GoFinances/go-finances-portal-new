import { useRouter } from 'next/router'

import React from 'react'
import { SettingsIcon } from '@chakra-ui/icons'

import { Container, Menu, MenuButton, MenuItem, MenuList, Button, Text } from '../../atomic'

import { useAuthentication } from '../../../hooks/use-authentication'

export default function Header() {
    const { push } = useRouter()
    const { signOut } = useAuthentication()

    const redirect = (path: string) => {
        push(path)
    }


    return (
    <Container
        maxWidth={"100%"}
        width={"100%"}
        p="xxxs"
        m="0"
        bg="brand.primary-default"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    >
        <Text as="b" color="brand.secondary-default" cursor="pointer" onClick={()=> redirect('/dashboard')}>GoFinances</Text>
        <Menu>
            <MenuButton as={Button}>
                <SettingsIcon />
            </MenuButton>
            <MenuList>
                <MenuItem onClick={signOut}>Sair</MenuItem>
            </MenuList>
        </Menu>
    </Container>
    )
}
