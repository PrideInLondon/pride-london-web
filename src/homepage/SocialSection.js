import React from 'react'
import { Row } from '../components/grid'
import donateSectionLeft from './donateSectionLeft.svg'
import donateSectionRight from './donateSectionRight.svg'
import donateSectionRightMobile from './donateSectionRightMobile.svg'
import DonateButtonsGroup from './DonateButtonsGroup'
import {
    DonateSectionsWrapper,
    HeadDonate,
    BackgroundLeft,
    BackgroundRight,
    LayerContent,
} from './DonateSection.styles'

const SocialSection = () => (
    <>
        <iframe
            src="https://plugins.flockler.com/embed/iframe/188b7d2a14a051c338b30cb55476fc29/188b7d3a60a0c61fdcb37de184d07479"
            id="flockler-embed-iframe-188b7d3a60a0c61fdcb37de184d07479"
            height="800"
            style={{ "display": "block", border: 'none', width: '100%' }}
            allowfullscreen>
        </iframe>
    </>
)

export default SocialSection
