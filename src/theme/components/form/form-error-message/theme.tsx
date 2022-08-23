import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type FormErrorMessageConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = { }

const baseStyle = {
  element: {
    fontSize: "xs"
  },
  field: {
    fontSize: "xs"
  }
}

const sizes = {
  sm: {
    fontSize: 'xxxs'
  },
  md: {
    fontSize: 'xxs'
  },
  lg: {
    fontSize: 'xs'
  }
}

const FormErrorMessageTheme: FormErrorMessageConfig = {
  baseStyle,
  sizes,
  variants
}

export default FormErrorMessageTheme
