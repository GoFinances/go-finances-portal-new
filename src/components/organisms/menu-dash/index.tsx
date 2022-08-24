import React from 'react'

import { Grid } from '../../atomic'
import CardDashboard from '../../molecules/card-dashboard'


export default function MenuDash() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <CardDashboard type="income" description="ENTRADA" value={'R$ 2.000,00'}/>
        <CardDashboard type="outcome" description="SAÍDA" value={'R$ 1.000,00'}/>
        <CardDashboard type="total" description="TOTAL" value={'R$ 1.000,00'}/>
    </Grid>
  )
}
