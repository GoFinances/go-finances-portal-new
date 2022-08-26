import React from 'react'

import { Box } from '../../atomic'

import Header from '../../molecules/header'

type IAuthenticatedLayoutProps = {
    children: React.ReactNode
  }

export default function AuthenticatedLayout({ children }: IAuthenticatedLayoutProps) {
  return (
    <Box bg={'standard.light'} minHeight="100vh">
        <Header />
        <Box bg={'standard.light'} height="100%" py="xxxs" px="xxxl" >
          {children}
        </Box>
    </Box>
  )
}
