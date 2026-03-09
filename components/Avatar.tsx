import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import avatarImage from '../images/avatar.jpg'

const Avatar: FC = () => (
  <Link href="/">
    <Image
      className="inline-block w-32 h-32 mb-8 rounded-full"
      src={avatarImage}
      alt="Picture of the author"
      priority
      width={128}
      height={128}
    />
  </Link>
)

export default Avatar
