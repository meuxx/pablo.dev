import React from 'react'
import { NextSeo } from 'next-seo'
import Error from '../components/Error'

const Custom404: React.FC = () => (
  <>
    <NextSeo title="404 Not found" noindex />
    <Error title="NOT FOUND" message="You just hit a route that doesn't exist... the sadness." />
  </>
)

export default Custom404
