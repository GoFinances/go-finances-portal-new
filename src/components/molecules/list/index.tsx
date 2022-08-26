import React from 'react'
import * as Icons from 'react-icons/fa';

import { SmallCloseIcon, EditIcon } from '@chakra-ui/icons';

import { Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '../../atomic'
import { brand } from '../../../theme/colors';


export interface IHeader {
  label: string
  id: string
  row_custom?: "ROW_ICON_WITH_LABEL"
  icon?: string
  css?: (item:any) => React.CSSProperties | undefined
}

interface IList{
  headers: IHeader[];
  data: any[]
}

const getIdToValue = (item: any, id: string) : any => {
  if(id.split('.').length === 1){
    return  item[id]
  }

  const [firstId, ...newIdSplit] = id.split('.')
  id = newIdSplit.join('.')

  return getIdToValue(item[firstId], id)
}

const RowDefault = ({ css, id }:IHeader, item: any) => {
  return (<Td style={ (css ? css(item) : undefined)} key={id}>{getIdToValue(item, id)}</Td>)
}

const RowIconWithLabel = ({ css, id, icon }:IHeader, item: any) => {
  const [_,iconName] = (getIdToValue(item, icon || "") as String).split('/');
  const Icon = (Icons as any)[iconName];

  return (
    <Td style={ (css ? css(item) : undefined)} key={id}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        {getIdToValue(item, id)}
        <Icon color={brand["secondary-default"]} w={5} h={5} />
      </Box>
    </Td>
  )
}

const rowShow = () => {
  return {
    "ROW_DEFAULT" : RowDefault,
    "ROW_ICON_WITH_LABEL" : RowIconWithLabel
  }
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
                {headers.map((header:IHeader) => {
                  return rowShow()[header.row_custom || "ROW_DEFAULT"](header, item)
                })}
                <Td display="flex" justifyContent="space-around">
                  <Button variant='brand-primary-solid' size={'sm'} ><EditIcon w={4} h={4} /></Button>
                  <Button variant='brand-primary-solid' size={'sm'} ><SmallCloseIcon w={4} h={4} /></Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
