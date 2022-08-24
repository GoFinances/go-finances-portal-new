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
        marginY: "xxxs",
        borderRadius: 'md',
        thead : {
          tr :{
            height: "45px",
            color: 'brand.secondary-darkest'
          }
        },
        tbody : {
          tr :{
            height: "45px",
            color: 'brand.primary-default'
          }
        },
        tfoot : {
          tr :{
            height: "45px"
          }
        }
      }
    },
    variants
}

export default TableTheme
