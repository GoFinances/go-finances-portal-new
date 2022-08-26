import React, { useState } from 'react'

import List, { IHeader } from '../../molecules/list'

import { useTransaction } from '../../../hooks/use-transacion'

import { feedback } from '../../../theme/colors'

import { Box } from '../../atomic'
import Paginator from '../../molecules/list/paginator'
import FilterListTransaction from './filter-list-transaction'


export default function ListTransactions() {
  const [headers] = useState<IHeader[]>([
    { id: 'title', label: 'Nome' }, 
    { id: 'formattedValue', label: 'Preço', css:(item: any) => { 
      return { 
        color: item.type === 'outcome' ? feedback['error-default'] : null,
        fontWeight: 600
      }
    }}, 
    { id: 'category.title', label: 'Categoria' , row_custom: 'ROW_ICON_WITH_LABEL', icon: 'category.icon'},
    { id: 'formattedDate', label: 'Data' },
  ])
  const { 
    changePage,
    filter,
    transactions, 
    totalTransaction
  } = useTransaction()

  return (
    <Box>
      <FilterListTransaction />
      <List headers={headers} data={transactions}  />
      <Paginator 
        currentPage={filter.page}
        totalCount={totalTransaction}
        pageSize={10}
        onPageChange={page => changePage(page)}
      />
    </Box>
  )
}
