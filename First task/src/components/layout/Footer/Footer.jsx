import { copyright, footerColumns, footerTagline, socialLinks } from '../../../data/footer.js'
import AssetSlot from '../../ui/AssetSlot/AssetSlot.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import Container from '../Container/Container.jsx'

const CURRENT_PATH = window.location.pathname.replace(/\/$/, '') || '/'

const Footer = () => (
  <footer className="pt-28.5 pb-12">
    <Container size="medium">
      <div className="grid gap-x-8 gap-y-14 desktop:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <Logo href="/" />
          <p className="mt-7 max-w-76 text-md leading-comfortable text-secondary">{footerTagline}</p>
        </div>

        {/* Brand on the left; from desktop, four 158px link columns flush right. */}
        <nav
          className="grid grid-cols-2 gap-x-2 gap-y-12 tablet:grid-cols-4 desktop:grid-cols-[repeat(4,158px)]"
          aria-label="Footer"
        >
          {footerColumns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-md leading-5 font-regular text-subtle">{title}</h2>
              <ul className="mt-8.5 grid gap-y-7 text-md leading-5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="text-secondary no-underline underline-offset-4 hover:underline aria-[current=page]:underline"
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

      <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-t-border-subtle pt-12">
        <p className="text-xs text-secondary">{copyright}</p>
        <ul id="social" className="flex scroll-mt-32 gap-3">
          {socialLinks.map(({ name, href, icon }) => (
            <li key={name}>
              <a
                className="grid aspect-square w-10 place-items-center rounded-[50%] border border-border-subtle transition-[border-color] duration-fast ease-standard hover:border-violet-300"
                href={href}
                aria-label={name}
              >
                {/* Glyph artwork is cropped to its bounds: 15px across, as in the design. */}
                <AssetSlot className="size-3.75 object-contain" src={icon} name="social-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </footer>
)

export default Footer
