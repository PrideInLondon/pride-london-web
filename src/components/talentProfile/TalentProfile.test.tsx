import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { json } from './__mocks__'
import { TalentProfile } from './TalentProfile'

describe('TalentProfile', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <TalentProfile
        type={uuid()}
        title={uuid()}
        name={uuid()}
        bio={{ json }}
        website={uuid()}
        email={uuid()}
        facebook={uuid()}
        twitter={uuid()}
        instagram={uuid()}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
