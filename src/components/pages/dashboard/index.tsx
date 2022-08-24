import React from 'react'

import { Box } from '../../atomic'

import MenuDash from '../../organisms/menu-dash'
import TableTransaction from '../../organisms/table-transaction'

export default function Dashboard() {
  return (
    <Box p="xxxs">
      <MenuDash />
      <TableTransaction />
    </Box>    
  )
}
