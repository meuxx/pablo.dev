import { useCallback } from 'react'

const useFathomGoal = (code: string, cents = 0): (() => void) => {
  return useCallback(() => {
    if (window.fathom === undefined) {
      return
    }

    window.fathom.trackGoal(code, cents)
  }, [code, cents])
}

enum GOAL {
  CV = 'V5LKNTOU',
  MAIL = 'NMFGPZ35',
  GITHUB = 'TUDCIJWD',
  LINKEDIN = 'VN1YOMWA',
  ORG = 'HBXPURPT',
  SOURCE = '0SG34XMR',
  FATHOM = 'UP0QQDXI',
}

export { GOAL }
export default useFathomGoal
