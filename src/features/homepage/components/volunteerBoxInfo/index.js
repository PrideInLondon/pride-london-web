import React, { Fragment } from 'react'
import Button from '../../../../components/button'
import volunteerBg from '../../../../theme/assets/images/volunteer-bg.jpg'
import volunteerBgMobile from '../../../../theme/assets/images/volunteer-bg-mobile.jpg'
import { ContentVolunteer, BackgroundVolunteer } from './styles'

const VolunteerBoxInfo = () => (
  <Fragment>
    <BackgroundVolunteer>
      <picture>
        <source media="(min-width: 768px)" srcSet={volunteerBg} />
        <img src={volunteerBgMobile} alt="Packhelp Logo" />
      </picture>
    </BackgroundVolunteer>
    <ContentVolunteer>
      <h2>Volunteer</h2>
      <p>
        Pride in London is run almost entirely by volunteers. We could use
        people like you to help us organise the best event that we can.
      </p>
      <Button wide={false} primary link to="#">
        Help keep Pride going
      </Button>
    </ContentVolunteer>
  </Fragment>
)

export default VolunteerBoxInfo
