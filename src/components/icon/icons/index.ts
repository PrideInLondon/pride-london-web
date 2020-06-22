import { IconName, InternalIconProps } from '../Icon.types'
import Accessibility from './Accessibility'
import Arrow from './Arrow'
import Calendar from './Calendar'
import Chat from './Chat'
import Chevron from './Chevron'
import Date from './Date'
import Email from './Email'
import Facebook from './Facebook'
import Laptop from './Laptop'
import LinkedIn from './LinkedIn'
import Live from './Live'
import Messenger from './Messenger'
import OnDemand from './OnDemand'
import Play from './Play'
import Twitter from './Twitter'

const ACCESSIBILITY = 'accessibility',
  ARROW = 'arrow',
  CALENDAR = 'calendar',
  CHAT = 'chat',
  CHEVRON = 'chevron',
  DATE = 'date',
  EMAIL = 'email',
  FACEBOOK = 'facebook',
  LAPTOP = 'laptop',
  LINKED_IN = 'linked-in',
  LIVE = 'live',
  MESSENGER = 'messenger',
  ON_DEMAND = 'on-demand',
  PLAY = 'play',
  TWITTER = 'twitter'

export const NAMES = [
  ACCESSIBILITY,
  ARROW,
  CALENDAR,
  CHAT,
  CHEVRON,
  DATE,
  EMAIL,
  FACEBOOK,
  LAPTOP,
  LINKED_IN,
  LIVE,
  MESSENGER,
  ON_DEMAND,
  PLAY,
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
  [EMAIL]: Email,
  [FACEBOOK]: Facebook,
  [LAPTOP]: Laptop,
  [LINKED_IN]: LinkedIn,
  [LIVE]: Live,
  [MESSENGER]: Messenger,
  [ON_DEMAND]: OnDemand,
  [PLAY]: Play,
  [TWITTER]: Twitter,
}
