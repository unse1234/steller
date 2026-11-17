import { developer } from '../data/developer.js'
import Container from '../components/layout/Container/Container.jsx'
import Button from '../components/ui/Button/Button.jsx'
const FallbackPage = ({ isAccountDemo = false }) => (
  <section className="min-h-[70vh] bg-background-muted pt-52 pb-20 desktop:pt-64">
    <Container size="compact" className="text-center">
      <p className="text-xs font-semibold text-accent">{isAccountDemo ? 'Portfolio demonstration' : 'Page not found'}</p>
      <h1 className="mx-auto mt-5 max-w-200 text-display-md leading-tight font-medium">{isAccountDemo ? 'Account access is a demo.' : 'That page is not part of this demo.'}</h1>
      <p className="mx-auto mt-6 max-w-150 text-base leading-comfortable text-secondary">{isAccountDemo ? 'Stellar is a fictional product created as a front-end portfolio concept. No live sign-in, account creation or subscription is available.' : 'Explore the Home and About pages, or contact M.Unse about your own website project.'}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4"><Button href="/" variant="accent" size="lg">Explore the demo</Button><Button href={developer.emailHref} size="lg">Hire {developer.name}</Button></div>
    </Container>
  </section>
)
export default FallbackPage
