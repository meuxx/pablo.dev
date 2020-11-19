import Header from './Header'
import React from 'react'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <div className="ml-80 lg:mx-0">{children}</div>
  </>
)

export default Layout
