import React from 'react'
import Sidebar from './Sidebar'

const Layout: React.FC = ({ children }) => (
  <>
    <Sidebar />
    <div className="lg:ml-80 xl:mr-80" role="main">
      {children}
    </div>
  </>
)

export default Layout
