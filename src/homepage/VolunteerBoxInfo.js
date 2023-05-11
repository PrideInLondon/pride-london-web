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
            <h2>Volunteer</h2>
            <p>
              Pride in London is run almost entirely by volunteers. We could use
              people like you to help us organise the best event that we can.
            </p>
            <Button to="https://prideinlondon.rosterfy.com/register">
              Register interest now
            </Button>
          </ContentVolunteer>
        </Column>
      </Row>
    </Container>
  </Fragment>
)

export default VolunteerBoxInfo
