import { useEffect, useId, useRef, useState } from 'react'
import { accountLinks, primaryNavigation } from '../../../data/navigation.js'
import Button from '../../ui/Button/Button.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import Container from '../Container/Container.jsx'

/*
 * Floating, fixed navigation bar. Below the desktop breakpoint the links and
 * account actions collapse into a dropdown panel; on desktop the same markup
 * is laid out inline.
 */

/* Desktop: the bar's inline padding is its radius minus the button's, so the
   CTA nests concentrically in the rounded end; symmetric so the centre column
   sits on the bar's centre. */
const BAR = [
  'pointer-events-auto relative m-(--ring-width-md) grid min-h-17.5 grid-cols-[1fr_auto] items-center',
  'rounded-pill border border-border-subtle bg-surface py-3 pr-3 pl-5 shadow-ring-edge ring-md ring-surface',
  'desktop:min-h-22 desktop:grid-cols-[1fr_auto_1fr] desktop:px-5.75 desktop:py-0',
].join(' ')

const MENU = [
  'max-desktop:absolute max-desktop:inset-x-0 max-desktop:top-[calc(100%+var(--ring-width-md)+12px)]',
  'max-desktop:hidden max-desktop:flex-col max-desktop:gap-4 max-desktop:p-3 max-desktop:data-[open=true]:flex',
  'max-desktop:rounded-lg max-desktop:border max-desktop:border-border-subtle max-desktop:bg-surface',
  'max-desktop:shadow-floating max-desktop:ring-md max-desktop:ring-surface',
  'desktop:contents',
].join(' ')

/* Collapsed: full-width rows. Desktop: inline links that grow on hover. */
const LINK = [
  'text-md text-primary no-underline transition-[color] duration-fast ease-standard hover:text-accent',
  'max-desktop:block max-desktop:rounded-sm max-desktop:px-4 max-desktop:py-3 max-desktop:text-base max-desktop:hover:bg-background-muted',
  'desktop:inline-block desktop:transition-[color,scale] desktop:hover:scale-108',
].join(' ')

/* Two bars, drawn as pseudo-elements, that cross into an X while the menu
   is open. */
const TOGGLE_ICON = [
  'relative h-2.5 w-4',
  'before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:rounded-[1px] before:bg-current',
  'before:transition-[translate,rotate] before:duration-fast before:ease-standard',
  'after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:rounded-[1px] after:bg-current',
  'after:transition-[translate,rotate] after:duration-fast after:ease-standard',
  'group-aria-expanded:before:translate-y-[4.25px] group-aria-expanded:before:rotate-45',
  'group-aria-expanded:after:translate-y-[-4.25px] group-aria-expanded:after:-rotate-45',
].join(' ')

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const barRef = useRef(null)
  const toggleRef = useRef(null)

  // The collapsed menu closes on Escape or on any press outside the bar.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setIsMenuOpen(false)
      toggleRef.current?.focus()
    }
    const handlePointerDown = (event) => {
      if (!barRef.current?.contains(event.target)) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-header pt-5 desktop:pt-6.5">
      <Container>
        <nav ref={barRef} className={BAR} aria-label="Primary">
          <Logo className="justify-self-start desktop:ms-1" href="/" />

          <button
            ref={toggleRef}
            type="button"
            className="group inline-grid size-11 cursor-pointer place-items-center justify-self-end rounded-[50%] border border-border bg-surface p-0 text-primary transition-[background-color] duration-fast ease-standard hover:bg-background-muted desktop:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={TOGGLE_ICON} aria-hidden="true" />
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <div id={menuId} className={MENU} data-open={isMenuOpen}>
            <ul className="desktop:flex desktop:gap-[clamp(24px,3.33vw,48px)]">
              {primaryNavigation.map(({ label, href }) => (
                <li key={href}>
                  <a className={LINK} href={href} onClick={closeMenu} aria-current={href === (window.location.pathname.replace(/\/$/, '') || '/') ? 'page' : undefined}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex max-desktop:flex-col max-desktop:gap-2 max-desktop:border-t max-desktop:border-t-border-subtle max-desktop:pt-4 desktop:items-center desktop:justify-self-end desktop:gap-8">
              <a className={LINK} href={accountLinks.signIn.href} onClick={closeMenu}>
                {accountLinks.signIn.label}
              </a>
              <Button
                className="max-desktop:w-full"
                href={accountLinks.signUp.href}
                variant="outline"
                onClick={closeMenu}
              >
                {accountLinks.signUp.label}
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
