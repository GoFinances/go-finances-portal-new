import { HTMLInputTypeAttribute } from 'react'

import { InputProps } from '@chakra-ui/react'

import { Input } from '../../atomic/Input'

import {
  FieldErrorsImpl,
  Path,
  UseFormRegister,
} from 'react-hook-form'

import FormField, { FieldLabel } from './field'

export type InputSizes = 'xs' | 'sm' | 'md' | 'lg'

type Props = InputProps & {
  name: string
  label: FieldLabel
  errors: FieldErrorsImpl;
  fieldRegister: Path<any>;
  register: UseFormRegister<any>;
  type: HTMLInputTypeAttribute
  size?: InputSizes
}

const FormInput = (props: Props) => {
  const {
    fieldRegister,
    register,
    size = 'sm',
    name,
    label,
    errors,
    ...inputProps
  } = props

  return (
    <FormField name={name} label={label} error={errors[name]}>
      <Input 
        data-testid={`input-${name}`}
        size={size}
        variant="outline-brand-primary-default"
        {...inputProps}
        {...register(fieldRegister)} 
      />
    </FormField>
  )
}

export default FormInput


 