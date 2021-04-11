import { useCallback } from 'react'
import { trackGoal } from 'fathom-client'

const useFathomGoal = (code: string, cents = 0): (() => void) => {
  return useCallback(() => {
    trackGoal(code, cents)
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
