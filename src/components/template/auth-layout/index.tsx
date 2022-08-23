import React from 'react'

import {
    Box
} from '@chakra-ui/react'

type IAuthLayoutProps = {
    children: React.ReactNode
  }

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Box bg={'standard.light'} minHeight="100vh">
        <Box bg={'standard.light'} height="100%">
            {children}
        </Box>
    </Box>
  )
}
