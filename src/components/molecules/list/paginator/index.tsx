import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { DOTS, usePagination } from '../../../../hooks/use-pagination'
import { Box, Button, Text } from '../../../atomic'

interface IPaginator {
  onPageChange: ( value:number ) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
}

export default function Paginator({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize
}: IPaginator ) {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Box display='flex' alignItems='center' justifyContent="space-between" mt="nano">
      <Text>Nº de resultado(s): {totalCount}</Text>
      <Box>
        <Button variant='default-outline' disabled={currentPage === 1} mr="nano" onClick={onPrevious} >
          <ChevronLeftIcon w={8} h={8} color="red.500" />
        </Button>
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <Text mr="nano">&#8230;</Text>;
          }

          return (
            <Button key={pageNumber} variant='brand-secondary-solid' mr="nano"  disabled={pageNumber === currentPage} onClick={() => onPageChange(Number(pageNumber))}>
              {pageNumber}
            </Button>
          );
        })}
        <Button variant='default-outline' disabled={lastPage === currentPage} onClick={onNext}>
          <ChevronRightIcon w={8} h={8} color="red.500" />
        </Button>
      </Box>
    </Box>
  );
}
