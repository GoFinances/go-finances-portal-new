import { selectAnatomy } from '@chakra-ui/anatomy'
import { PartsStyleObject } from '@chakra-ui/theme-tools'

import {
  getFilledStyles,
  getFlushedStyles,
  getOutlineStyles
} from './factories'

type SelectStyle = PartsStyleObject<typeof selectAnatomy>

type VariantStyles = {
  [key: string]: SelectStyle
}

type BaseStyle = SelectStyle

type SelectConfig = {
  baseStyle?: BaseStyle
  sizes?: VariantStyles
  variants?: VariantStyles
  defaultProps?: {
    size: string
    variant: string
  }
}

const variants: VariantStyles = {
  'outline-brand-primary-default': getOutlineStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'outline-brand-secondary-default': getOutlineStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'filled-brand-primary-default': getFilledStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'filled-brand-secondary-default': getFilledStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'flushed-brand-primary-default': getFlushedStyles({
    borderColorFocus: 'brand.primary-default'
  }),
  'flushed-brand-secondary-default': getFlushedStyles({
    borderColorFocus: 'brand.secondary-default'
  }),
  'quantity-picker-default': {
    field: {
      bgColor: 'standard.white',
      border: '1px solid',
      borderColor: 'neutral.mediumlight',
      borderRadius: 'sm',
      color: 'brand.primary-default',
      fontWeight: 'bold',
      _hover: {
        border: '2px solid',
        borderColor: 'neutral.darkest'
      },
      _focus: {
        border: '2px solid',
        borderColor: 'brand.primary-default'
      },
      _invalid: {
        border: '2px solid',
        color: 'feedback.error-dark',
        borderColor: 'feedback.error-dark'
      },
      _disabled: {
        border: '2px solid',
        color: 'neutral.extradark',
        opacity: 0.32
      }
    }
  }
}

const SelectTheme: SelectConfig = {
  baseStyle: {
    field: {
      borderRadius: "sm",
      color: 'neutral.darkest',
      _placeholder: {
        color: 'neutral.extradark'
      },
      _disabled: {
        bgColor: 'neutral.mediumlight',
        borderColor: 'neutral.extradark',
        opacity: 0.32
      }
    }
  },
  sizes: {
    sm: {
      field: {
        paddingY: 'nano',
        paddingX: 'xxxs',
        fontSize: 'xxs',
        lineHeight: 'sm'
      }
    },
    md: {
      field: {
        paddingY: '0.625em',
        paddingX: 'xxxs',
        fontSize: 'xs',
        lineHeight: 'sm'
      }
    },
    lg: {
      field: {
        paddingY: '0.625em',
        paddingX: 'xxxs',
        fontSize: 'sm',
        lineHeight: 'lg'
      }
    }
  },
  variants
}

export default SelectTheme
