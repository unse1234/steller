import Navbar from '../Navbar/Navbar.jsx'

const SiteLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
)

export default SiteLayout
