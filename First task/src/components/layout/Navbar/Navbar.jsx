import { useEffect, useId, useRef, useState } from 'react'
import { accountLinks, primaryNavigation } from '../../../data/navigation.js'
import Button from '../../ui/Button/Button.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import './Navbar.css'

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
    <header className="navbar">
      <div className="container">
        <nav ref={barRef} className="navbar__bar" aria-label="Primary">
          <Logo href="/" />

          <button
            ref={toggleRef}
            type="button"
            className="navbar__toggle"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="navbar__toggle-icon" aria-hidden="true" />
            <span className="visually-hidden">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <div id={menuId} className="navbar__menu" data-open={isMenuOpen}>
            <ul className="navbar__links">
              {primaryNavigation.map(({ label, href }) => (
                <li key={href}>
                  <a className="navbar__link" href={href} onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__actions">
              <a className="navbar__link" href={accountLinks.signIn.href} onClick={closeMenu}>
                {accountLinks.signIn.label}
              </a>
              <Button
                className="navbar__cta"
                href={accountLinks.signUp.href}
                variant="outline"
                onClick={closeMenu}
              >
                {accountLinks.signUp.label}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
