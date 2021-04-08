import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import { container, main } from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={container}>
        <main className={main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
