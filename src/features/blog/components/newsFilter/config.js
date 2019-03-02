import theme from '../../../../theme/theme'

export const ALL_ARTICLES = 'ALL_ARTICLES'
export const NEWS = 'NEWS'
export const RESEARCH = 'RESEARCH'
export const ANNOUNCEMENTS = 'ANNOUNCEMENTS'
export const PARTNERS = 'PARTNERS'

const config = {
  [ALL_ARTICLES]: {
    label: 'All Articles',
    backgroundColor: theme.colors.yellow,
    textColor: theme.colors.black,
  },
  [NEWS]: {
    label: 'News',
    backgroundColor: theme.colors.tomato, // wrong color
    textColor: theme.colors.white,
  },
  [RESEARCH]: {
    label: 'Research',
    backgroundColor: theme.colors.pink,
    textColor: theme.colors.white,
  },
  [ANNOUNCEMENTS]: {
    label: 'Announcements',
    backgroundColor: theme.colors.electricPurple,
    textColor: theme.colors.white,
  },
  [PARTNERS]: {
    label: 'Partners',
    backgroundColor: theme.colors.bondiBlue,
    textColor: theme.colors.white,
  },
}

export default config
