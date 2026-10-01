import Navbar from '../Navbar/Navbar.jsx'
import './SiteLayout.css'

const SiteLayout = ({ children }) => (
  <>
    
    <Navbar />
    <main id="main-content" className="site-main" tabIndex={-1}>
      {children}
    </main>
  </>
)

export default SiteLayout
