import type { FC, PropsWithChildren } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Sidebar />
    <div className="flex min-h-screen flex-col gap-16 py-12 md:py-16 lg:pl-80 xl:pr-80">
      <div className="mx-8 md:mx-16 flex-1">{children}</div>
      <Footer className="mx-8 md:mx-16" />
    </div>
  </>
)

export default Layout
