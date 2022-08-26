/* eslint-disable react/display-name */
import { forwardRef, ButtonProps } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

import { brand } from '../../../theme/colors'

import { IOption } from '../../../models/option'

import {
    Button,
    Flex,
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem,
    Text,
    Input,
    MenuOptionGroup,
    Box,
    MenuItemOption
} from '../../atomic'

type ButtonSizes = 'sm' | 'md' | 'lg'

type Props = ButtonProps & {
  options: IOption[]
  defaultID?: string
  placeholder?: string
  onChange: (value: string | undefined) => void
  size?: ButtonSizes
  isDisabled?: boolean
  isInvalid?: boolean
  isCleanable?: boolean
  maxOptionsHeight?: string
}

export const SelectMenu = forwardRef<Props, 'input'>((props, ref) => {
  const {
    options,
    defaultID,
    placeholder = 'Selecione uma opção',
    onChange,
    size = 'sm',
    isDisabled = false,
    isInvalid = false,
    isCleanable = false,
    maxOptionsHeight = '100%',
    ...menuButtonProps
  } = props

  const [selectedOption, setSelectedOption] = useState<
    IOption | undefined
  >()
  const [isOpen, setIsOpen] = useState(false)
  const [optionsWidth, setOptionsWidth] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleChange = (e: IOption) => {
    setSelectedOption(e)
    setIsOpen(false)
    onChange(String(e.id))
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedOption(undefined)
    onChange(undefined)
  }

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setOptionsWidth(buttonRef.current ? buttonRef.current.offsetWidth : 0)
    }

    if (buttonRef.current) {
      setOptionsWidth(buttonRef.current.offsetWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [buttonRef?.current?.offsetWidth])

  useEffect(() => {
    setSelectedOption(options.find(option => option.id === defaultID))
  }, [options, defaultID])

  const borderColor = selectedOption ? 'neutral.darkest' : 'neutral.default'

  return (
    <Menu
      size={size}
      gutter={0}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      isLazy
    >
      <Input
        ref={ref}
        hidden
        value={selectedOption?.id || ''}
        onChange={() => ({})}
      />
      <MenuButton
        data-testid="menu-button"
        ref={buttonRef}
        as={Button}
        variant="select-default"
        size={size}
        border={isInvalid ? '2px' : '1px'}
        borderColor={isInvalid ? 'feedback.error-dark' : borderColor}
        fontWeight="regular"
        disabled={isDisabled}
        onClick={handleOpen}
        w="100%"
        textAlign="left"
        {...menuButtonProps}
      >
         {`${selectedOption ? selectedOption.description : placeholder}`}
      </MenuButton>
      <MenuList>
          <MenuOptionGroup title={undefined} type="checkbox">
            {options.map((option) => {
              const {id, description , icon } = option
              let Icon = icon
              return (
                <MenuItemOption
                  key={`multiselect-menu-${id}`}
                  value={id}
                  onClick={()=> handleChange(option)}
                >
                  <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Flex align="center">{description}</Flex>
                    {Icon && <Icon color={`${brand["secondary-default"]}`} />}
                  </Box>
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
})
