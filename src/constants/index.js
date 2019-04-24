const theme = require('../theme/theme')

const constants = {
  accessibilityOptions: [
    'Step free access',
    'Wheelchair accessibile',
    'Accessible Toilets',
    'BSL Interpreter',
    'Hearing loop installed',
    'Complimentary ticket for personal assistant',
    'Service animals welcome',
    'Accessible parking spaces at venue',
  ],
  eventCategories: [
    'Cabaret and Variety',
    'Talks and Debates',
    'Community',
    'Film and Screenings',
    'Plays and Theatre',
    'Social and Networking',
    'Nightlife',
    'Exhibition and Tours',
    'Sports and Activities',
    'Health',
    'Music',
  ],
  venueDetails: ['Gender neutral toilets', 'Outdoors', 'Indoors'],
  area: ['Central', 'North', 'East', 'South', 'West'],
  audience: ['Youth', '16+', '18+', 'Families'],
  timeOfDay: ['Morning', 'Afternoon', 'Evening'],
  sponsorLevels: {
    headline: 'Headline',
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
    partners: 'Partners',
  },
  itemsToLoad: 24,
  dateFormat: 'DD/MM/YYYY',
  articleCategories: [
    {
      title: 'All Articles',
      hexColour: theme.colors.yellow,
    },
    {
      title: 'Events',
      hexColour: theme.colors.tomato,
    },
    {
      title: 'Fundraising',
      hexColour: theme.colors.pink,
    },
    {
      title: 'General',
      hexColour: theme.colors.greyBlue,
    },
    {
      title: 'Partnerships',
      hexColour: theme.colors.bondiBlue,
    },
    {
      title: 'Research',
      hexColour: theme.colors.eucalyptusGreen,
    },
  ],
}

module.exports = constants
