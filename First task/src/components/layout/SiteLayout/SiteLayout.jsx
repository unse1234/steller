import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'

const SiteLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default SiteLayout
