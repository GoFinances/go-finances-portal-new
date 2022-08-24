import React, { useState } from 'react'

import List, { IHeader } from '../../molecules/list'

import { useTransaction } from '../../../hooks/use-transacion'


export default function ListTransactions() {
  const [headers] = useState<IHeader[]>([
    { id: 'title', label: 'Título' }, 
    { id: 'formattedValue', label: 'Preço' }, 
    { id: 'category.title', label: 'Categoria' },
    { id: 'formattedDate', label: 'Data' },
    { id: '', label: '' }
  ])
  const { transactions } = useTransaction()

  return (
    <List headers={headers} data={transactions}  />
  )
}





