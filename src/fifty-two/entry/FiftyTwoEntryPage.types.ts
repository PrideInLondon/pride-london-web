import { PageLinkDetails } from '../../components/pageSwitcher/PageSwitcher'

export interface FiftyTwoEntryPageProps {
  pageContext: {
    prev: PageLinkDetails
    next: PageLinkDetails
  }
}
