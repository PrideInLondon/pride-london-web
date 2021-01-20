import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { generateVideoUrl, Video } from './Video'
import { VideoProps } from './Video.types'

describe('generateVideoUrl', () => {
  it.each`
    host         | expected
    ${'vimeo'}   | ${'https://player.vimeo.com/video/foo?autoplay=1'}
    ${'youtube'} | ${'https://youtube.com/embed/foo?autoplay=1'}
  `('should generate video url for host $host', ({ host, expected }) => {
    const actual = generateVideoUrl(host, 'foo')
    expect(actual).toEqual(expected)
  })
})

describe('Video', () => {
  const props: VideoProps = {
    host: 'youtube',
    videoId: 'TIExvoJXwKE',
    coverImage: {
      src: 'image',
      alt: 'The Pride in London Logo',
    },
    caption: 'Pride in London presents: You! Me! Us! We!',
  }

  const buttonTitle = `Play ${props.caption} video`

  it('should render a cover image and button', () => {
    const { queryAllByRole, queryAllByTitle, queryByTitle } = render(
      <Video {...props} />
    )

    // image is shown
    expect(queryAllByRole('button')).toHaveLength(1) // 1 button is hidden from DOM as it is duplicated
    expect(queryAllByTitle(buttonTitle)).toHaveLength(2) // two buttons _actually_ exist

    expect(queryByTitle(props.caption)).toBeFalsy() // video is hidden
  })

  it.each`
    index
    ${0}
    ${1}
  `(
    'should remove the cover image and button when button $index is clicked',
    ({ index }) => {
      const { queryAllByTitle, queryByTitle } = render(<Video {...props} />)

      act(() => {
        fireEvent.click(queryAllByTitle(buttonTitle)[index])
      })

      expect(queryAllByTitle(buttonTitle)).toHaveLength(0) // image is hidden
      expect(queryByTitle(props.caption)).toBeTruthy() // video is shown
    }
  )

  it('should have no accessibility violations', async () => {
    const { container } = render(<Video {...props} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should have no accessibility violations once clicked', async () => {
    const { queryAllByRole, container } = render(<Video {...props} />)

    act(() => {
      fireEvent.click(queryAllByRole('button')[0])
    })

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
