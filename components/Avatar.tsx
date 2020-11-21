import React from 'react'
import Image from 'next/image'

const Avatar: React.FC = () => (
  <div className="inline-block w-32 h-32 mb-8">
    <Image
      className="rounded-full"
      src="/img/avatar.jpg"
      alt="Picture of the author"
      loading="lazy"
      layout="fixed"
      width={128}
      height={128}
      // priority
    />
  </div>
)

export default Avatar
