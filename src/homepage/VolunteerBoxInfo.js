import React, { Fragment } from 'react'
import { Container, Row, Column } from '../components/grid'
import { Button } from '../components/button'
import {
  ContentVolunteer,
  BackgroundVolunteer,
} from './VolunteerBoxInfo.styles'

const VolunteerBoxInfo = () => (
  <Fragment>
    <BackgroundVolunteer />
    <Container>
      <Row>
        <Column>
          <ContentVolunteer>
            <h2>It's our Pride - Make it Happen</h2>
            <p>
              Pride in London requires over 1000 on the day volunteers to run
              our event. Could you help us organise the best event that we can?
            </p>
            <Button to="/support-us/volunteer">Volunteer</Button>
          </ContentVolunteer>
        </Column>
      </Row>
    </Container>
  </Fragment>
)

export default VolunteerBoxInfo
