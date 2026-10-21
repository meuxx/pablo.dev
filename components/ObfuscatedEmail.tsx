'use client'

import type { FC } from 'react'

import { type EmailParts, getDecoyMailto, openEmail } from '../utils/email'

const ObfuscatedEmail: FC<{ email: EmailParts }> = ({ email }) => (
  <a
    className={
      'e-addr transition-colors border-b border-dotted ' +
      'hover:text-fgbold hover:border-transparent focus:text-fgbold focus:border-transparent'
    }
    href={getDecoyMailto(email)}
    title="Contact email"
    aria-label="Contact email"
    onClick={openEmail(email)}
  >
    {email.user}@<span>{email.name}</span>
    <span>example.</span>
    {email.tld}
  </a>
)

export default ObfuscatedEmail
