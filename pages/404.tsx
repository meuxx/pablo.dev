import React from 'react'
import { NextSeo } from 'next-seo'
import Error from '../components/Error'

const Custom404: React.FC = () => (
  <>
    <NextSeo title="404 Not found" noindex />
    <div className="space-y-16 my-16 ml-16 mr-96 xl:mr-16 md:my-12 md:mx-8">
      <Error title="NOT FOUND" message="You just hit a route that doesn't exist... the sadness." />
    </div>
  </>
)

export default Custom404
