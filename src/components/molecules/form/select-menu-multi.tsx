import React, { useEffect, useRef, useState } from "react";

import { forwardRef, MenuButtonProps } from "@chakra-ui/react";

import { Path, UseFormRegister } from "react-hook-form";

import { brand } from "../../../theme/colors";

import { IOption } from "../../../models/option";


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Input,
  Text,
  Box
} from "../../atomic";


type ButtonSizes = 'sm' | 'md' | 'lg'

type MultiSelectMenuProps = MenuButtonProps & {
  options: IOption[]
  onChange: (value: string[] | undefined) => void
  size?: ButtonSizes
  isDisabled?: boolean
  isInvalid?: boolean
  label: string
  fieldRegister: Path<any>;
  register: UseFormRegister<any>;
  defaultValue: string[]
}

export const MultiSelectMenu = forwardRef<MultiSelectMenuProps, 'input'>((props, ref) => {
  const { 
    register,
    onChange,
    options,
    size = 'sm',
    isDisabled = false,
    isInvalid = false,
    label,
    fieldRegister,
    defaultValue,
    ...menuButtonProps
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(()=>{
    setSelectedOptions(defaultValue)
  },[defaultValue])

  const borderColor = selectedOptions ? 'neutral.darkest' : 'neutral.default'

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <Menu 
      closeOnSelect={false}
    >
      {({ onClose }) => (
        <>
          <Input
            ref={ref}
            hidden
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
            {`${label}${
              selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""
            }`}
          </MenuButton>
          <MenuList>
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  onChange([])
                  onClose();
                }}
              >
                Limpar
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              type="checkbox"
              onChange={(values: string[]) => {
                setSelectedOptions(values.filter((value) => value.length));
                onChange?.(values);
              }}
              // defaultValue={defaultValue}
            >
              {options.map(({ id, description, icon }) => {
                let Icon = icon
                return (
                  <MenuItemOption key={`multiselect-menu-${id}`} value={id} isChecked={true} >
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                      <Text>
                        {description}
                      </Text>
                      <Icon color={brand["secondary-default"]} />
                    </Box>
                  </MenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
});