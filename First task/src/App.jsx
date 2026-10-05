import SiteLayout from './components/layout/SiteLayout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import { useLinkInterception, usePathname } from './utils/router.js'

const App = () => {
  useLinkInterception()
  const isAboutPage = usePathname() === '/about'

  return (
    <>
      <title>{isAboutPage ? 'About — Stellar' : 'Stellar'}</title>
      <meta name="description" content={isAboutPage
        ? 'Meet the team and values behind Stellar. Discover how we help software teams build better, grow together, and win more customers.'
        : 'Gain unparalleled insights into your data with our robust analytics suite and Stellar.'} />
      <SiteLayout>
        {isAboutPage ? <AboutPage /> : <HomePage />}
      </SiteLayout>
    </>
  )
}

export default App
