import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { act } from 'react-dom/test-utils'
import { Gallery } from './Gallery'

describe(Gallery.name, () => {
  const ENTRIES = Array.from(Array(6).keys()).map(_ => uuid())
  const SHOW_MORE_BUTTON = <button>Show more</button>

  describe('non-paged', () => {
    it('should call render with same entries as given via props', () => {
      const mockRender = jest.fn()

      render(<Gallery entries={ENTRIES} render={mockRender} />)

      expect(mockRender).toHaveBeenCalledWith({ entries: ENTRIES })
    })

    it('should not render button', () => {
      const { queryByRole } = render(
        <Gallery entries={ENTRIES} render={jest.fn()} />
      )

      expect(queryByRole('button')).toBeNull()
    })
  })

  describe('paged', () => {
    it('should call initial render with N entries when page size is set to N', () => {
      const PAGE_SIZE = 1
      const mockRender = jest.fn()

      render(
        <Gallery
          entries={ENTRIES}
          render={mockRender}
          paged={{ pageSize: PAGE_SIZE, ShowMoreButton: SHOW_MORE_BUTTON }}
        />
      )

      expect(mockRender).toHaveBeenCalledWith({
        entries: ENTRIES.slice(0, PAGE_SIZE),
      })
    })

    it('should render button when there are more entries to show', () => {
      const PAGE_SIZE = ENTRIES.length - 1

      const { queryByRole } = render(
        <Gallery
          entries={ENTRIES}
          render={jest.fn()}
          paged={{ pageSize: PAGE_SIZE, ShowMoreButton: SHOW_MORE_BUTTON }}
        />
      )

      expect(queryByRole('button')).not.toBeNull()
    })

    it('should not render button when there are no more entries to show', () => {
      const PAGE_SIZE = ENTRIES.length

      const { queryByRole } = render(
        <Gallery
          entries={ENTRIES}
          render={jest.fn()}
          paged={{ pageSize: PAGE_SIZE, ShowMoreButton: SHOW_MORE_BUTTON }}
        />
      )

      expect(queryByRole('button')).toBeNull()
    })

    it('should call render with N + page size entries following button press', () => {
      const PAGE_SIZE = 1
      const mockRender = jest.fn()

      const { getByRole } = render(
        <Gallery
          entries={ENTRIES}
          render={mockRender}
          paged={{ pageSize: PAGE_SIZE, ShowMoreButton: SHOW_MORE_BUTTON }}
        />
      )

      act(() => {
        fireEvent.click(getByRole('button'))
      })

      expect(mockRender).toHaveBeenCalledWith({
        entries: ENTRIES.slice(0, PAGE_SIZE * 2),
      })
    })
  })
})
