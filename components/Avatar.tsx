import React from 'react'
import Image from 'next/image'

const Avatar: React.FC = () => (
  <div className="inline-block bg-fgbold w-32 h-32 rounded-full mb-8 overflow-hidden">
    <Image
      src="/img/avatar.jpg"
      alt="Picture of the author"
      loading="lazy"
      layout="responsive"
      width={128}
      height={128}
    />
  </div>
)

export default Avatar
