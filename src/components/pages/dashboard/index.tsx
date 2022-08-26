import React from 'react'

import { Box } from '../../atomic'

import MenuDash from '../../organisms/menu-dash'
import ListTransactions from '../../organisms/list-transactions'

export default function Dashboard() {
  return (
    <Box>
      <MenuDash />
      <ListTransactions />
    </Box>    
  )
}
