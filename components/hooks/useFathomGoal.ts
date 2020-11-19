import { useCallback } from 'react'

const useFathomGoal = (code: string, cents = 0): (() => void) => {
  return useCallback(() => {
    if (window.fathom === undefined) {
      return
    }

    window.fathom.trackGoal(code, cents)
  }, [code, cents])
}

export default useFathomGoal
