import { copyright, footerColumns, footerTagline, socialLinks } from '../../../data/footer.js'
import { developer } from '../../../data/developer.js'
import Logo from '../../ui/Logo/Logo.jsx'
import Container from '../Container/Container.jsx'
import { usePathname } from '../../../utils/router.js'

const Footer = () => {
  const pathname = usePathname()

  return (
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
                        aria-current={href === pathname ? 'page' : undefined}
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
          <div className="grid gap-2 text-xs text-secondary"><p>{copyright}</p><p>Front-end implementation by <a href={developer.emailHref} className="text-accent underline-offset-4 hover:underline">{developer.name}</a>. Original design: Stellar by Flowbase.</p></div>
          <ul id="social" className="flex scroll-mt-52 flex-wrap gap-3">
            {socialLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  className="inline-flex min-h-10 items-center rounded-pill px-4 text-md no-underline border border-border-subtle transition-[border-color] duration-fast ease-standard hover:border-violet-300"
                  href={href}
                  aria-label={name}
                >
                  {/* Glyph artwork is cropped to its bounds: 15px across, as in the design. */}
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
