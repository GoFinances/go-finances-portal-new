import React from 'react'
import { Box } from '../../../../atomic'

interface IFilter {
    children: React.ReactNode
}

export default function Filter({ children }: IFilter) {
  return (
    <Box p="xxxs" bg="standard.white" borderRadius="md" my="nano">
        {children}
    </Box>
  )
}
