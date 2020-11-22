import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => (
  <>
    <Sidebar />
    <div className="lg:pl-80 xl:pr-80 py-12 md:py-16 flex flex-col min-h-screen space-y-16">
      <div className="mx-8 md:mx-16 flex-1" role="main">
        {children}
      </div>
      <Footer className="mx-8 md:mx-16" />
    </div>
  </>
)

export default Layout
