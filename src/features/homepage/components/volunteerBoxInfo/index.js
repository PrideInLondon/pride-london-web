import React from 'react'
import Button from '../../../../components/button'
import { ContentVolunteer } from './styles'

const VolunteerBoxInfo = () => (
  <ContentVolunteer>
    <h2>Volunteer</h2>
    <p>
      Pride in London is run almost entirely by volunteers. We could use people
      like you to help us organise the best event that we can.
    </p>
    <Button wide={false} primary link to="#">
      Help keep Pride going
    </Button>
  </ContentVolunteer>
)

export default VolunteerBoxInfo
