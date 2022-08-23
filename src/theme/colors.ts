import { rgba } from "../utils/rgba"

const standard = {
  black: '#000000',
  white: '#FFFFFF',
  light: '#EFEFEF'
}

const support = {
  'primary-light': '#63BB98',
  'primary-default': '#449C79',
  'primary-dark': '#007158',
  'secondary-light': '#C689BF',
  'secondary-default': '#AF4FA5',
  'secondary-dark': '#8D3F85',
  'tertiary-light': '#FFD9D6',
  'tertiary-default': '#FFA8A3',
  'tertiary-dark': '#FF7A70'
}

export const brand = {
  'primary-extralightest': '#FFF5EF',
  'primary-lightest': '#FF995A',
  'primary-light': '#FF7D2D',
  'primary-default': '#E85A00',
  'primary-dark': '#BA4700',
  'primary-darkest': '#903700',
  'secondary-lightest': '#888CCB',
  'secondary-light': '#45407F',
  'secondary-default': '#2E2867',
  'secondary-dark': '#18134B',
  'secondary-darkest': '#0A062F'
}


const inverseBrand = {
  'primary-lightest': brand['secondary-lightest'],
  'primary-light': brand['secondary-light'],
  'primary-default': brand['secondary-default'],
  'primary-dark': brand['secondary-dark'],
  'primary-darkest': brand['secondary-darkest'],
  'secondary-lightest': brand['primary-lightest'],
  'secondary-light': brand['primary-light'],
  'secondary-default': brand['primary-default'],
  'secondary-dark': brand['primary-dark'],
  'secondary-darkest': brand['primary-darkest']
}


const feedback = {
  'warning-lightest': '#F7DC7B',
  'warning-light': '#FFE270',
  'warning-default': '#FFD325',
  'warning-dark': '#F5C400',
  'warning-extradark': '#937610',
  'success-lightest': '#A1CBAD',
  'success-light': '#7FCD79',
  'success-default': '#4CB944',
  'success-dark': '#3D9537',
  'success-mediumdark': '#198038',
  'success-extradark': '#125A27',
  'error-lightest': '#F0A3A7',
  'error-light': '#F65151',
  'error-mediumlight': '#DA1E28',
  'error-default': '#ED0D0D',
  'error-dark': '#C20A0A',
  'information-lightest': '#E6ECFA',
  'information-light': '#54A9DE',
  'information-default': '#278DCC',
  'information-dark': '#1D6A9A',
  'information-extradark': '#0043CE'
}


const neutral = {
  lightest: '#F8F9FA',
  extralight: '#E9ECEF',
  mediumlight: '#DEE2E6',
  light: '#CED4DA',
  default: '#ADB5BD',
  dark: '#6C757D',
  mediumdark: '#495057',
  extradark: '#343A40',
  darkest: '#212529'
}

const alpha = {
  'whitealpha-50': rgba(standard.white, 0.04),
  'whitealpha-100': rgba(standard.white, 0.06),
  'whitealpha-200': rgba(standard.white, 0.08),
  'whitealpha-300': rgba(standard.white, 0.16),
  'whitealpha-400': rgba(standard.white, 0.24),
  'whitealpha-500': rgba(standard.white, 0.36),
  'whitealpha-600': rgba(standard.white, 0.48),
  'whitealpha-700': rgba(standard.white, 0.64),
  'whitealpha-800': rgba(standard.white, 0.8),
  'whitealpha-900': rgba(standard.white, 0.92),
  'blackalpha-50': rgba(standard.black, 0.04),
  'blackalpha-100': rgba(standard.black, 0.06),
  'blackalpha-200': rgba(standard.black, 0.08),
  'blackalpha-300': rgba(standard.black, 0.16),
  'blackalpha-400': rgba(standard.black, 0.24),
  'blackalpha-500': rgba(standard.black, 0.36),
  'blackalpha-600': rgba(standard.black, 0.48),
  'blackalpha-700': rgba(standard.black, 0.64),
  'blackalpha-800': rgba(standard.black, 0.8),
  'blackalpha-900': rgba(standard.black, 0.92)
}

export const colors = {
  standard,
  brand,
  inverseBrand,
  support,
  feedback,
  neutral,
  alpha
}
