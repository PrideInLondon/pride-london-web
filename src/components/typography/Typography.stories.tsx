import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { H1, H2, H3, H4, H5, H6, P } from './Typography'

const options = {
  Title: 'title',
  Cactus: 'cactus',
}

storiesOf('Typography', module)
  .add('Headings', () => (
    <div>
      <H1 fontFamily={select('Font', options, options.Title)}>
        H1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H1>
      <H2 fontFamily={select('Font', options, options.Title)}>
        H2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H2>
      <H3 fontFamily={select('Font', options, options.Title)}>
        H3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H3>
      <H4 fontFamily={select('Font', options, options.Title)}>
        H4 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H4>
      <H5 fontFamily={select('Font', options, options.Title)}>
        H5 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H5>
      <H6 fontFamily={select('Font', options, options.Title)}>
        H6 - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </H6>
    </div>
  ))
  .add('Body', () => (
    <div>
      <P variant="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        exercitationem quas doloremque quae culpa repudiandae, magni, omnis modi
        doloribus cumque numquam nesciunt, incidunt ullam corrupti? Itaque
        obcaecati vitae natus possimus.
      </P>
      <P variant="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        exercitationem quas doloremque quae culpa repudiandae, magni, omnis modi
        doloribus cumque numquam nesciunt, incidunt ullam corrupti? Itaque
        obcaecati vitae natus possimus.
      </P>
      <P variant="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        exercitationem quas doloremque quae culpa repudiandae, magni, omnis modi
        doloribus cumque numquam nesciunt, incidunt ullam corrupti? Itaque
        obcaecati vitae natus possimus.
      </P>
    </div>
  ))
