import React from 'react'
import { colors } from '../../theme/colors'
import { P } from '../../components/typography'
import {
  Wrapper,
  StyledTag,
  ForEveryKindHeading,
  ForEveryKindContent,
  PlaceholderDiv,
} from './YouMeUsWePage.styles'
import Mark from './Mark'
import CelebratingAllyshipSection from './CelebratingAllyshipSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <CelebratingAllyshipSection />
      <ActsOfAllyshipSection />
      <Mark />
      <PlaceholderDiv name="Image" style={{ height: 1000 }} />
      <ForEveryKindHeading>For Every Kind</ForEveryKindHeading>
      <P textAlign="center">Narrated by Emma Frankland</P>
      <ForEveryKindContent>
        For the L’s, the G’s, the B’s and the T’s.
        <br />
        Plus the Allies and the Andros, Agenders and Aporas.
        <br />
        For the Butch, the Fluid, the Non-Binary.
        <br />
        The Inter, Demi & Grey - The Novi and Dyadic.
        <br />
        For the Maveriques and those who feel Dysphoric.
        <br />
        <br />
        For the Aromantics, the Intersex and the gender Apathetic.
        <br />
        For the Questioning. For the Curious. For the Queer.
        <br />
        <br />
        For every race. Every refugee. Every fluid identity.
        <br />
        <br />
        For the Masculine. For the Feminine. The men and the womxn.
        <br />
        Ladies born as boys. And the girls who chose to change.
        <br />
        For the Mono, Poly, Allo, Andro, Gyno and the Pans.
        <br />
        For Peris, For Varis and everyone between.
        <br />
        <br />
        Pride in London 2020.
        <br />
        You. Me. Us. We.
      </ForEveryKindContent>
      <Mark />
    </Wrapper>
  </>
)

export default YouMeUsWePage
