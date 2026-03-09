'use client'

import { useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

const AxeDev = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      void import('@axe-core/react').then(({ default: axe }) => axe(React, ReactDOM, 1000))
    }
  }, [])

  return null
}

export default AxeDev
