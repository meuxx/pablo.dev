import React from 'react'
import Img from 'react-optimized-image'

import avatarImage from '../images/avatar.jpg'

const Avatar: React.FC = () => (
  <Img
    className="inline-block w-32 h-32 mb-8 rounded-full"
    src={avatarImage}
    densities={[1, 2]}
    sizes={[128, 256]}
    webp
    alt=""
    aria-label="Picture of the author"
    loading="lazy"
    width={128}
    height={128}
  />
)

export default Avatar
