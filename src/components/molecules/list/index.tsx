import { css } from '@chakra-ui/react';

import React from 'react'

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '../../atomic'


export interface IHeader {
  label: string;
  id: string;
  css?: (item:any) => React.CSSProperties | undefined;
}

interface IList {
  headers: IHeader[];
  data: any[]
}

const getIdToValue = (item: any, id: string) : any => {
  if(id.split('.').length === 1)
    return item[id] 

  const [firstId, ...newIdSplit] = id.split('.')
  const newId = newIdSplit.join('.')

  return getIdToValue(item[firstId], newId)
}

export default function List({ headers, data } : IList) {
  return (
    <TableContainer>
      <Table size='sm' variant="brand-primary-solid">
        <Thead>
          <Tr>{headers.map(({ label, id }:IHeader) => (<Th key={id}>{label}</Th>))}</Tr>
        </Thead>
        <Tbody>
          {data.map((item:any) => (
              <Tr key={item.id}>
                {headers.map(({css, ...header}:IHeader) => {
                  return (<Td style={ (css ? css(item) : undefined)} key={header.id}>{getIdToValue(item, header.id)}</Td>    )
                })}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
