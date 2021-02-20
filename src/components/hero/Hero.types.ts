export const HERO_COLORS = [
  'blue',
  'darkPurple',
  'green',
  'indigo',
  'pink',
  'purple',
  'white',
] as const

type HeroColor = typeof HERO_COLORS[number]

export interface HeroProps {
  title: string
  subtitle?: string
  color?: HeroColor
  image: string
}
