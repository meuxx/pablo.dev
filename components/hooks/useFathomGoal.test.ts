import { renderHook } from '@testing-library/react-hooks'
import useFathomGoal from './useFathomGoal'

describe('useFathomGoal hook', () => {
  describe('fathom not loaded', () => {
    beforeEach(() => {
      delete window.fathom
    })

    it('should not throw any error', () => {
      const { result } = renderHook(() => useFathomGoal('code'))
      const trackGoal = result.current

      trackGoal()

      expect(() => trackGoal()).not.toThrow()
    })
  })

  describe('fathom loaded', () => {
    beforeEach(() => {
      delete window.fathom
      window.fathom = {
        trackGoal: jest.fn(),
        blockTrackingForMe: jest.fn(),
        enableTrackingForMe: jest.fn(),
        trackPageview: jest.fn(),
      }
    })

    it('should call trackGoal with default cents', () => {
      const { result } = renderHook(() => useFathomGoal('code'))
      const trackGoal = result.current

      trackGoal()

      expect(window.fathom.trackGoal).toHaveBeenCalledWith('code', 0)
    })

    it('should call trackGoal with specified cents', () => {
      const { result } = renderHook(() => useFathomGoal('code', 100))
      const trackGoal = result.current

      trackGoal()

      expect(window.fathom.trackGoal).toHaveBeenCalledWith('code', 100)
    })

    it('should return the same handler for the same input', () => {
      const { result, rerender } = renderHook(() => useFathomGoal('code', 100))

      const firstHandler = result.current
      rerender()
      const secondHandler = result.current

      expect(firstHandler).toEqual(secondHandler)
    })

    it('should return a different handler for a different input', () => {
      const { result, rerender } = renderHook(({ cents }) => useFathomGoal('code', cents), {
        initialProps: { cents: 100 },
      })

      const firstHandler = result.current
      rerender({ cents: 10 })
      const secondHandler = result.current

      expect(firstHandler).not.toEqual(secondHandler)
    })
  })
})
