import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Banner } from '../components/banner'
import { Accordion, AccordionItem } from '../components/accordion'
import { media } from '../theme/media'
import bannerBackground from './bannerBackground.jpg'

const Container = styled.div`
  position: relative;
  min-height: 500px;

  ${media.tablet`
    max-width: 70%;
    padding: 80px;
  `}
`

const TextContainer = styled.div`
  padding: 20px;
`

const Stages = ({ data }: any) => (
  <>
    <Banner
      titleText="Parade groups"
      subtitleText="Find out more about the groups who marched in last year's parade!"
      altText="Parade groups"
      imageSrc={bannerBackground}
      imageFullWidth
    />
    <Container>
      <TextContainer>
        The parade celebrates our colourful community, brightening up the
        streets of London with people from every walk of life. In 2019, we
        welcomed around 30,000 individuals to march together for love, protest
        and activism. Formed from over 600 groups - more than half of which
        represented charities or not-for-profit organisations - we’re proud that
        last year’s Pride was our most diverse yet, uniting more trans*, BAME
        and bisexual communities than ever before.
      </TextContainer>
      <TextContainer>
        Applications for the 2022 parade will open closer to the date. Further
        information will be announced in due course.
      </TextContainer>
      <Accordion>
        <AccordionItem>Hello</AccordionItem>
        <AccordionItem>Hello</AccordionItem>
        <AccordionItem>Hello</AccordionItem>
      </Accordion>
    </Container>
  </>
)

Stages.propTypes = {
  data: PropTypes.shape({
    paradeGroups: PropTypes.any,
  }).isRequired,
}

export default Stages

// TRAFALGAR SQUARE STAGE
// Stage open from 12pm-8pm
// Early afternoon (from 12pm):
// The cast of Dear Evan Hansen
// Kinky Boots in Concert at Drury Lane
// SVN
// Jack Hawitt
// Pride’s Got Talent - Natalie Grace
// Homoparody
// Winner of Pride’s Got Talent - Cabaret
// Bang Bang Romeo
// Mila Jam

// Mid afternoon (from 3pm):
// London Gay Big Band
// ARION
// Kat Graham
// Winner of Pride’s Got Talent - Music
// Cat Burns
// Drag Race UK Stars: The Vivienne, Lawrence Chaney, Tia Kofi

// Late afternoon/evening (from 5pm):
// Samantha Mumba
// Netta
// Emeli Sande
// Ava Max

// LEICESTER SQUARE STAGE
// Stage open from 12pm-8pm
// A dedicated and inclusive space for performers who identify as female, non-binary or trans.
// Early afternoon (from 12pm):
// Eddy Luna
// El Conchitas
// Mila Jam
// July Jones
// Jen Ives
// Christian Adore
// Eloise Viola
// Mid afternoon (from 3pm):
// Drag Syndrome &amp; Justin Bond
// GIRLI
// Bang Bang Romeo
// Pre Wavy

// Late afternoon/evening (from 5pm):
// Poppy Ajudha
// Kat Graham
// Krystal Lake &amp; the Voguers
// Pyra
// Siena Liggins
// Dréya Mac

// GOLDEN SQUARE STAGE
// Stage open from 12pm-8pm
// A dedicated and inclusive space for performers from the Global Majority.
// Early afternoon (from 12pm):
// King Dee
// Janethan
// Keanan Sayce
// Eddy Luna
// DJ Kaspa
// Misty
// Frizz Price
// Reptile B
// Sharna Cane
// Ben E Davis
// Casey Tufnell
// Cushyhaze

// Mid afternoon (from 3pm):
// Siena Liggins
// Mista Strange
// Lordin
// Tré Mitchell
// Mila Jam
// Late afternoon/evening (from 5pm):
// ARION
// Cat Burns
// Teraj
// Samantha Mumba
// Cocoa Butter Club

// SOHO STAGE - DEAN STREET
// Stage open from 12pm-8pm
// A dedicated and inclusive space for performers from the world of Cabaret.
// Early afternoon (from 12pm):
// Dylan Holloway
// Ms Alexa Vox
// Kenan Kián
// Conleth Kane
// Ebony Rose Dark
// Alpha Dancers
// Romeo De La Cruz
// LGBTQ Disabled Queer &amp; Hear
// The Enby Show: Carrot, Flick &amp; Shardeazy

// Mid afternoon (from 3pm):
// Baby Lame
// Valerio Lysander
// Jamie Fuxx
// Lysander Dove from Bar Wotever
// Don One
// Rahmel Lee
// Khalysis
// Shar Cooterie

// Late afternoon/evening (from 5pm):
// Ring The Alarm
// The Glory Present: MAN UP! Don One, Dairy King, Paul Bollywood &amp; Clay Taurus
// Adam All &amp; Apple Derrieres
// Holestar
// Justin Vivian Bond

// Marnie Scarlet
// Victoria Scone
// Beyonce Experience
