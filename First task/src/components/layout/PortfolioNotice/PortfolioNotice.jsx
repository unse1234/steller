import { developer } from '../../../data/developer.js'

const PortfolioNotice = () => (
  <aside aria-label="Portfolio demo notice" className="pointer-events-auto mx-auto mt-4 flex max-w-180 flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-md border border-violet-100 bg-surface px-3 py-2 text-xs leading-5 text-secondary shadow-ring-edge">
    <span>Portfolio demo by <strong className="font-semibold">{developer.name}</strong></span>
    <span>Fictional product · No live accounts</span>
    <a href={developer.emailHref} className="font-semibold text-accent underline-offset-4 hover:underline">Hire me <span aria-hidden="true">↗</span></a>
  </aside>
)

export default PortfolioNotice
