import React from 'react'
import Sidebar from './Sidebar'

const Layout: React.FC = ({ children }) => (
  <>
    <Sidebar />
    <div className="ml-80 lg:mx-0">{children}</div>
  </>
)

export default Layout
