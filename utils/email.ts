import type { MouseEvent } from 'react'

export interface EmailParts {
  user: string
  name: string
  tld: string
}

export const splitEmail = (email: string): EmailParts => {
  const [user, domain] = email.split('@')
  const tldIndex = domain.lastIndexOf('.') + 1

  return { user, name: domain.slice(0, tldIndex), tld: domain.slice(tldIndex) }
}

export const getDecoyMailto = ({ user, name, tld }: EmailParts): string => `mailto:${user}@${name}example.${tld}`

export const openEmail =
  ({ user, name, tld }: EmailParts) =>
  (e: MouseEvent): void => {
    e.preventDefault()
    window.location.href = `mailto:${user}@${name}${tld}`
  }
