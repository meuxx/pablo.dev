import React from 'react'
import { NextSeo } from 'next-seo'
import Error from '../components/Error'

const Custom404: React.FC = () => (
  <>
    <NextSeo title="404 Not found" noindex />
    <div className="space-y-16 my-12 mx-8 md:my-16 md:mx-16">
      <Error title="NOT FOUND" message="You just hit a route that doesn't exist... the sadness." />
    </div>
  </>
)

export default Custom404
