import React, { useState } from 'react'

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '../../atomic'
import { useTransaction } from '../../../hooks/use-transacion'

export default function TableTransaction() {
  const [columnsHeader] = useState(['Título', 'Preço', 'Categoria', 'Data',''])
  const { transactions } = useTransaction()

  return (
    <TableContainer>
      <Table size='sm' variant="brand-primary-solid">
        <Thead>
          <Tr>{columnsHeader.map(col => (<Th key={col}>{col}</Th>))}</Tr>
        </Thead>
        <Tbody>
            {transactions.map(transaction => (
              <Tr key={transaction.id}>
                <Td>{transaction.title}</Td>
                <Td color={transaction.type === 'income' ? 'brand.primary-darkest' : 'feedback.error-lightest'} >{transaction.formattedValue}</Td>
                <Td>{transaction.category.title}</Td>
                <Td>{transaction.formattedDate}</Td>
                <Td></Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
