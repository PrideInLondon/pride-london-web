import React from 'react'
import { render } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { act } from 'react-dom/test-utils'
import { Gallery } from './Gallery'

describe(Gallery.name, () => {
  const ENTRIES = Array.from(Array(6).keys()).map(_ => uuid())

  describe('non-paged', () => {
    it('should call render with same entries as given via props', () => {
      const mockRender = jest.fn()

      render(<Gallery entries={ENTRIES} render={mockRender} />)

      expect(mockRender).toHaveBeenCalledWith(
        expect.objectContaining({
          entries: ENTRIES,
        })
      )
    })
  })

  describe('paged', () => {
    it('should call initial render with N entries when page size is set to N', () => {
      const PAGE_SIZE = ENTRIES.length - 1
      const mockRender = jest.fn()

      render(
        <Gallery entries={ENTRIES} render={mockRender} pageSize={PAGE_SIZE} />
      )

      expect(mockRender).toHaveBeenCalledWith(
        expect.objectContaining({
          entries: ENTRIES.slice(0, PAGE_SIZE),
        })
      )
    })

    it('should call render with N + page size entries following show next page call', () => {
      let mockShowNextPage: () => void

      const PAGE_SIZE = 1
      const mockRender = jest.fn(
        ({
          entries,
          showNextPage,
        }: {
          entries: string[]
          showNextPage: () => void
        }) => {
          mockShowNextPage = showNextPage
          return <>{entries}</>
        }
      )

      render(
        <Gallery entries={ENTRIES} render={mockRender} pageSize={PAGE_SIZE} />
      )

      act(() => {
        mockShowNextPage()
      })

      expect(mockRender).toHaveBeenLastCalledWith(
        expect.objectContaining({
          entries: ENTRIES.slice(0, PAGE_SIZE * 2),
        })
      )
    })
  })
})
