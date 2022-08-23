import React from 'react'

import {
    Box
} from '@chakra-ui/react'

type IAuthenticatedLayoutProps = {
    children: React.ReactNode
  }

export default function AuthenticatedLayout({ children }: IAuthenticatedLayoutProps) {
  return (
    <Box bg={'standard.light'} minHeight="100vh">
        <Box bg={'standard.light'} height="100%">
            {children}
        </Box>
    </Box>
  )
}
