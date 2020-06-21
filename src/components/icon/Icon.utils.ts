import requireAll from 'require-all'
import { colors } from '../../theme/colors'
import { InternalIconProps, ROTATIONS } from './Icon.types'

export const calculateIconName = (module: string) =>
  module
    .replace('.tsx', '')
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()

const allComponents = requireAll({
  dirname: __dirname + '/icons',
  filter: /.+\.tsx$/,
})

export const COMPONENTS: {
  [key: string]: React.FC<InternalIconProps>
} = Object.keys(allComponents).reduce(
  (acc, module) => ({
    ...acc,
    [calculateIconName(module)]: allComponents[module].default,
  }),
  {}
)

export const calculateComponent = (name: string) => COMPONENTS[name]

const COLORS: {
  [key: string]: {
    primary: string
    secondary: string
  }
} = {
  indigo: {
    primary: colors.indigo,
    secondary: colors.eucalyptusGreen,
  },
  white: {
    primary: colors.white,
    secondary: colors.eucalyptusGreen,
  },
}

export const calculateColors = (variant: string) => COLORS[variant]

export const calculateRotationDegrees = (rotate: typeof ROTATIONS[number]) =>
  ROTATIONS.indexOf(rotate) * 90
