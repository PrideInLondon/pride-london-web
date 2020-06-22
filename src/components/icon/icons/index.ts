import { IconName, InternalIconProps } from '../Icon.types'
import Accessibility from './Accessibility'
import Arrow from './Arrow'
import Calendar from './Calendar'
import Chat from './Chat'
import Chevron from './Chevron'
import Date from './Date'
import Download from './Download'
import Email from './Email'
import Facebook from './Facebook'
import GenderNeutral from './GenderNeutral'
import Home from './Home'
import Instagram from './Instagram'
import Laptop from './Laptop'
import LinkedIn from './LinkedIn'
import Live from './Live'
import Location from './Location'
import Menu from './Menu'
import Messenger from './Messenger'
import OnDemand from './OnDemand'
import Parade from './Parade'
import Phone from './Phone'
import Play from './Play'
import Pricing from './Pricing'
import Profile from './Profile'
import Saved from './Saved'
import Search from './Search'
import Settings from './Settings'
import Twitter from './Twitter'

const ACCESSIBILITY = 'accessibility',
  ARROW = 'arrow',
  CALENDAR = 'calendar',
  CHAT = 'chat',
  CHEVRON = 'chevron',
  DATE = 'date',
  DOWNLOAD = 'download',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
  GENDER_NEUTRAL = 'gender-neutral',
  HOME = 'home',
  INSTAGRAM = 'instagram',
  LAPTOP = 'laptop',
  LINKED_IN = 'linked-in',
  LIVE = 'live',
  LOCATION = 'location',
  MENU = 'menu',
  MESSENGER = 'messenger',
  ON_DEMAND = 'on-demand',
  PARADE = 'parade',
  PHONE = 'phone',
  PLAY = 'play',
  PRICING = 'pricing',
  PROFILE = 'profile',
  SAVED = 'saved',
  SEARCH = 'search',
  SETTINGS = 'settings',
  TWITTER = 'twitter'

export const NAMES = [
  ACCESSIBILITY,
  ARROW,
  CALENDAR,
  CHAT,
  CHEVRON,
  DATE,
  DOWNLOAD,
  EMAIL,
  FACEBOOK,
  GENDER_NEUTRAL,
  HOME,
  INSTAGRAM,
  LAPTOP,
  LINKED_IN,
  LIVE,
  LOCATION,
  MENU,
  MESSENGER,
  ON_DEMAND,
  PARADE,
  PHONE,
  PLAY,
  PRICING,
  PROFILE,
  SAVED,
  SEARCH,
  SETTINGS,
  TWITTER,
] as const

export const COMPONENTS: {
  [key in IconName]: React.FC<InternalIconProps>
} = {
  [ACCESSIBILITY]: Accessibility,
  [ARROW]: Arrow,
  [CALENDAR]: Calendar,
  [CHAT]: Chat,
  [CHEVRON]: Chevron,
  [DATE]: Date,
  [DOWNLOAD]: Download,
  [EMAIL]: Email,
  [FACEBOOK]: Facebook,
  [GENDER_NEUTRAL]: GenderNeutral,
  [HOME]: Home,
  [INSTAGRAM]: Instagram,
  [LAPTOP]: Laptop,
  [LINKED_IN]: LinkedIn,
  [LIVE]: Live,
  [LOCATION]: Location,
  [MENU]: Menu,
  [MESSENGER]: Messenger,
  [ON_DEMAND]: OnDemand,
  [PARADE]: Parade,
  [PHONE]: Phone,
  [PLAY]: Play,
  [PRICING]: Pricing,
  [PROFILE]: Profile,
  [SAVED]: Saved,
  [SEARCH]: Search,
  [SETTINGS]: Settings,
  [TWITTER]: Twitter,
}
