import SiteLayout from './components/layout/SiteLayout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FallbackPage from './pages/FallbackPage.jsx'
import { useLinkInterception, usePathname } from './utils/router.js'

const App = () => {
  useLinkInterception()
  const pathname = usePathname()
  const isAboutPage = pathname === '/about'
  const isHomePage = pathname === '/'
  const isAccountDemo = pathname === '/sign-in' || pathname === '/sign-up'

  return (
    <>
      <title>{isAboutPage ? 'About the build — M.Unse' : isHomePage ? 'Stellar — Portfolio demo by M.Unse' : isAccountDemo ? 'Account demo — Stellar' : 'Page not found — Stellar'}</title>
      <meta name="description" content={isAboutPage
        ? 'Explore a responsive React implementation of the Stellar template by M.Unse. Fictional product and sample content; original design credited to Flowbase.'
        : 'A responsive SaaS website portfolio concept implemented by M.Unse. Explore the demo or enquire about landing-page development.'} />
      <SiteLayout>
        {isHomePage ? <HomePage /> : isAboutPage ? <AboutPage /> : <FallbackPage isAccountDemo={isAccountDemo} />}
      </SiteLayout>
    </>
  )
}

export default App
