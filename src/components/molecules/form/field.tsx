import { StyleProps } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FieldValues } from 'react-hook-form'

import { FormControl, FormLabel, FormErrorMessage } from "../../atomic";

export type FieldLabel = {
  text: string
  props?: StyleProps
}

type Props = {
  name: string
  label?: FieldLabel
  children: ReactNode
  isDisabled?: boolean
  error?: FieldValues | undefined
}

const FormField = ({ 
  name,
  label,
  children,
  error ,
  isDisabled = false,
}: Props) => {
  return (
    <FormControl isInvalid={!!error} isDisabled={isDisabled}>
      {label && (
        <FormLabel
          htmlFor={name}
          fontWeight="bold"
          fontSize="xs"
          data-testid={`form-label-text${isDisabled ? '-disabled' : '' }`}
          color="brand.secondary-default"
          textTransform={"uppercase"}
          {...label.props}
        >
          {label.text}
        </FormLabel>
      )}
      {children}
      {error && (
        <FormErrorMessage  data-testid="form-error-message" fontSize={'xxxs'} >{error?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormField
