import React from 'react'
import { Helmet } from '../components/helmet'
import { PageIntro } from '../components/pageIntro'
import { H3, P } from '../components/typography'

const NotFoundPage = () => (
  <>
    <Helmet title="Page Not Found" />
    <PageIntro>
      <H3 as="h1">Page Not Found</H3>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
    </PageIntro>
  </>
)

export default NotFoundPage
