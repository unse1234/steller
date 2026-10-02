import { copyright, footerColumns, footerTagline, socialLinks } from '../../../data/footer.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import Container from '../Container/Container.jsx'
import './Footer.css'

const CURRENT_PATH = '/'

const Footer = () => (
  <footer className="footer">
    <Container size="medium">
      <div className="footer__top">
        <div className="footer__brand">
          <Logo href="/" />
          <p className="footer__tagline">{footerTagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {footerColumns.map(({ title, links }) => (
            <div key={title} className="footer__column">
              <h2 className="footer__heading">{title}</h2>
              <ul className="footer__links">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="footer__link"
                      href={href}
                      aria-current={href === CURRENT_PATH ? 'page' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">{copyright}</p>
        <ul className="footer__social">
          {socialLinks.map(({ name, href, icon }) => (
            <li key={name}>
              <a className="footer__social-link" href={href} aria-label={name}>
                <AssetSlot className="footer__social-icon" src={icon} name="social-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </footer>
)

export default Footer
