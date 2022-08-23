import { components } from './components/index';
import { width, radius } from './borders'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { opacity } from './opacity'
import { shadows } from './shadows'
import { space } from './spacing'
import { fontSizes, fontWeights, fonts, lineHeights } from './typography'


export const theme = {
    components,
    borders: {
        ...width
    },
    breakpoints,
    colors,
    opacity,
    shadows,
    space,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights
}