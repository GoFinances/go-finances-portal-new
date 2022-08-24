import React from 'react'
import { useTransaction } from '../../../hooks/use-transacion'

import { Grid } from '../../atomic'
import CardDashboard from '../../molecules/card-dashboard'


export default function MenuDash() {
  const { balance } = useTransaction()
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <CardDashboard type="income" description="ENTRADA" value={balance?.income_formatted}/>
        <CardDashboard type="outcome" description="SAÍDA" value={balance?.outcome_formatted}/>
        <CardDashboard type="total" description="TOTAL" value={balance?.total_formatted}/>
    </Grid>
  )
}
