import { colors } from './theme/colors'

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
    unlisted: 'Unlisted',
    powered: 'Powered',
  },
  itemsToLoad: 24,
  dateFormat: 'DD/MM/YYYY',
  articleCategories: [
    {
      title: 'All Articles',
      hexColour: colors.yellow,
    },
    {
      title: 'Events',
      hexColour: colors.tomato,
    },
    {
      title: 'Fundraising',
      hexColour: colors.pink,
    },
    {
      title: 'General',
      hexColour: colors.greyBlue,
    },
    {
      title: 'Partnerships',
      hexColour: colors.bondiBlue,
    },
    {
      title: 'Research',
      hexColour: colors.eucalyptusGreen,
    },
    {
      title: 'Views',
      hexColour: colors.lemonGreen,
    },
  ],
  dateFilterCategories: [
    {
      title: 'Today',
      api: 'TODAY',
      hexColour: colors.yellow,
    },
    {
      title: 'Tomorrow',
      api: 'TOMORROW',
      hexColour: colors.tomato,
    },
    {
      title: 'Next 7 days',
      api: 'NEXT_7_DAYS',
      hexColour: colors.pink,
    },
  ],
  paradeGroupCategories: [
    {
      title: 'All groups',
      api: 'MAGIC_VALUE_NOT_USED',
      hexColour: colors.yellow,
    },
    {
      title: 'Arts',
      api: 'ARTS',
      hexColour: colors.tomato,
    },
    {
      title: 'Business',
      api: 'BUSINESS',
      hexColour: colors.pink,
    },
    {
      title: 'Charity',
      api: 'CHARITIES',
      hexColour: colors.greyBlue,
    },
    {
      title: 'Community group',
      api: 'COMMUNITY_GROUP',
      hexColour: colors.bondiBlue,
    },
    {
      title: 'Politics',
      api: 'POLITICS',
      hexColour: colors.darkPurple,
    },
    {
      title: 'Profession',
      api: 'PROFESSIONS',
      hexColour: colors.eucalyptusGreen,
    },
    {
      title: 'Sports',
      api: 'SPORTS',
      hexColour: colors.fuscia,
    },
    {
      title: 'Other',
      api: 'OTHER',
      hexColour: colors.skyBlue,
    },
  ],
  hexColours: [
    colors.yellow,
    colors.tomato,
    colors.pink,
    colors.greyBlue,
    colors.amber,
    colors.darkPurple,
    colors.eucalyptusGreen,
    colors.fuscia,
    colors.skyBlue,
    colors.silver,
    colors.bronze,
  ],
  filterTypes: ['checkbox', 'radio'],
  communityPartnerCategories: [
    {
      title: 'Everything',
      hexColour: colors.yellow,
    },
    {
      title: 'Drink',
      hexColour: colors.tomato,
    },
    {
      title: 'Eat',
      hexColour: colors.pink,
    },
    {
      title: 'Party',
      hexColour: colors.greyBlue,
    },
    {
      title: 'Shop',
      hexColour: colors.eucalyptusGreen,
    },
    {
      title: 'Sleep',
      hexColour: colors.fuscia,
    },
  ],
}

export default constants
