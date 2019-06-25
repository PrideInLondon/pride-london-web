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
    supporters: 'Supporters',
    mediaPartners: 'Media Partners',
    digitalPartners: 'Digital Partners',
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
    {
      title: 'Views',
      hexColour: theme.colors.lemonGreen,
    },
  ],
  paradeGroupCategories: [
    {
      title: 'All groups',
      api: 'MAGIC_VALUE_NOT_USED',
      hexColour: theme.colors.yellow,
    },
    {
      title: 'Arts',
      api: 'ARTS',
      hexColour: theme.colors.tomato,
    },
    {
      title: 'Business',
      api: 'BUSINESS',
      hexColour: theme.colors.pink,
    },
    {
      title: 'Charity',
      api: 'CHARITIES',
      hexColour: theme.colors.greyBlue,
    },
    {
      title: 'Community group',
      api: 'COMMUNITY_GROUP',
      hexColour: theme.colors.bondiBlue,
    },
    {
      title: 'Politics',
      api: 'POLITICS',
      hexColour: theme.colors.darkPurple,
    },
    {
      title: 'Profession',
      api: 'PROFESSIONS',
      hexColour: theme.colors.eucalyptusGreen,
    },
    {
      title: 'Sports',
      api: 'SPORTS',
      hexColour: theme.colors.fuscia,
    },
    {
      title: 'Other',
      api: 'OTHER',
      hexColour: theme.colors.skyBlue,
    },
  ],
  filterTypes: ['checkbox', 'radio'],
  communityPartnerCategories: [
    {
      title: 'Everything',
      hexColour: theme.colors.yellow,
    },
    {
      title: 'Drink',
      hexColour: theme.colors.tomato,
    },
    {
      title: 'Eat',
      hexColour: theme.colors.pink,
    },
    {
      title: 'Party',
      hexColour: theme.colors.greyBlue,
    },
    {
      title: 'Shop',
      hexColour: theme.colors.eucalyptusGreen,
    },
    {
      title: 'Sleep',
      hexColour: theme.colors.fuscia,
    },
  ],
}

module.exports = constants
