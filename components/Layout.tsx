import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <div className="ml-80 lg:mx-0">{children}</div>
  </>
)

export default Layout
