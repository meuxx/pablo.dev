import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Error from '../components/Error'

const Custom404: React.FC = () => (
  <Layout>
    <Head>
      <title>404 Not found</title>
    </Head>

    <div className="my-16 ml-16 mr-96 xl:mr-16 md:my-6 md:mx-6">
      <Error title="NOT FOUND" message="You just hit a route that doesn't exist... the sadness." />
    </div>
  </Layout>
)

export default Custom404
