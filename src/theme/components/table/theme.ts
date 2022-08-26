import { SystemStyleObject } from '@chakra-ui/theme-tools'

type VariantStyles = {
  [variant: string]: SystemStyleObject
}

type SizesStyles = {
  [size: string]: SystemStyleObject
}

type BaseStyle = SystemStyleObject

type TableConfig = {
  baseStyle?: BaseStyle
  sizes?: SizesStyles
  variants?: VariantStyles
}

const variants: VariantStyles = {
  'brand-primary-solid': {
    tbody: {
      tr: {
        bgColor: 'neutral.extralight',
        _odd: {
          bgColor: 'neutral.lightest'
        }
      }
    }
  },
}

const TableTheme: TableConfig = {
    baseStyle: {
      table: {
        bg: 'standard.white',
        borderRadius: 'md',
        thead : {
          tr :{
            height: "45px",
            color: 'brand.primary-darkest',
            fontSize: 'xxs',
          }
        },
        tbody : {
          tr :{
            height: "45px",
            color: 'brand.primary-default',
            fontSize: 'xxs',
          }
        },
        tfoot : {
          tr :{
            height: "45px",
            fontSize: 'xxs',
          }
        }
      }
    },
    variants
}

export default TableTheme
