import React from 'react'
import { H6, P } from '../typography/Typography'
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'
import { PageLink, PageList, PageNav, PageItem } from './PageSwitcher.styles'

export interface PageLinkDetails {
  title: string
  subtitle?: string
  url: string
}

interface PageSwitcherProps {
  prev: PageLinkDetails
  next: PageLinkDetails
  back: Omit<PageLinkDetails, 'subtitle'>
}
export const PageSwitcher: React.FC<PageSwitcherProps> = ({
  prev,
  next,
  back,
}) => {
  return (
    <PageNav>
      <PageList>
        <PageItem mr="auto" flex={1}>
          <PageLink
            to={prev.url}
            justifyContent={{ default: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <Icon
              name="arrow"
              variant="white"
              rotate="flip"
              width="40px"
              height="40px"
              mr="md"
            />
            <div>
              <H6
                color="white"
                as="span"
                mb={prev.subtitle ? '0' : undefined}
                display="block"
                textAlign="left"
              >
                <span>{prev.title}</span>
              </H6>

              {prev.subtitle && (
                <P color="white" textAlign="left">
                  {prev.subtitle}
                </P>
              )}
            </div>
          </PageLink>
        </PageItem>
        <PageItem
          px={{ default: '0', md: 'md' }}
          py={{ default: 'xl_mob', md: '0' }}
          justifyContent="center"
          display="flex"
        >
          <Button to={back.url} variant="outline-white">
            {back.title}
          </Button>
        </PageItem>
        <PageItem ml="auto" flex={1}>
          <PageLink
            to={next.url}
            justifyContent={{ default: 'center', md: 'flex-end' }}
            alignItems="center"
          >
            <div>
              <H6
                color="white"
                as="span"
                mb={next.subtitle ? '0' : undefined}
                textAlign="right"
                display="block"
              >
                {next.title}
              </H6>
              {next.subtitle && (
                <P color="white" textAlign="right">
                  {next.subtitle}
                </P>
              )}
            </div>
            <Icon
              ml="md"
              name="arrow"
              variant="white"
              width="40px"
              height="40px"
            />
          </PageLink>
        </PageItem>
      </PageList>
    </PageNav>
  )
}
