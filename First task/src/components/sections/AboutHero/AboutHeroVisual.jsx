import { attendees } from '../../../data/people.js'
import AvatarGroup from '../../ui/AvatarGroup/AvatarGroup.jsx'
import Logo from '../../ui/Logo/Logo.jsx'

/*
 * Lengths are in em of a 10px design unit at the 642px-wide desktop frame;
 * the font size follows the container width, so the whole illustration
 * scales as one piece.
 */

const Icon = ({ children, className = '' }) => (
  <svg className={`size-(--icon-size,1.6em) shrink-0 ${className}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)

const navigation = [
  ['Dashboard', <path key="d" d="M2.5 7 8 2.5 13.5 7v6.5h-4v-4h-3v4h-4z" fill="currentColor" stroke="none" />],
  ['Documentation', <><rect key="r" x="3" y="2" width="10" height="12" rx="1.5" /><path key="p" d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" /></>],
  ['Notification', <path key="n" d="M4.5 11V7.5a3.5 3.5 0 0 1 7 0V11l1 1.2h-9zM6.8 13.8h2.4" />],
  ['Messages', <path key="m" d="M8 2.6a5.4 5.4 0 0 0-4.7 8.1L2.6 13.4l2.8-.7A5.4 5.4 0 1 0 8 2.6z" />],
  ['Calendar', <><rect key="r" x="2.5" y="3.2" width="11" height="10.3" rx="1.5" /><path key="p" d="M2.5 6.5h11M5.5 2v2.4M10.5 2v2.4" /></>],
  ['Users', <><circle key="c" cx="8" cy="5.4" r="2.6" /><path key="p" d="M3.3 13.8a4.7 4.7 0 0 1 9.4 0" /></>],
]

const tabs = [
  ['Overview', 22.97, <><rect key="a" x="2.5" y="2.5" width="4.5" height="4.5" rx=".6" /><rect key="b" x="9" y="2.5" width="4.5" height="4.5" rx=".6" /><rect key="c" x="2.5" y="9" width="4.5" height="4.5" rx=".6" /><rect key="d" x="9" y="9" width="4.5" height="4.5" rx=".6" /></>],
  ['Schematic', 33.3, <path key="s" d="M2 4v8M14 4v8M5 8h6M6.5 6.5 5 8l1.5 1.5M9.5 6.5 11 8l-1.5 1.5" />],
  ['Logs', 44.2, <path key="l" d="M2.5 4h1M2.5 8h1M2.5 12h1M6 4h7.5M6 8h7.5M6 12h7.5" />],
]

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP']

const TimelineTask = ({ title, start, end, barClassName, className }) => (
  <div className={`absolute h-[6.26em] w-[22.92em] rounded-[0.9em] border border-border-subtle bg-surface ${className}`}>
    <span className={`absolute top-[2.55em] left-[1.05em] h-[2.1em] w-[0.15em] rounded-pill ${barClassName}`} />
    <p className="absolute top-[1.65em] left-[2.18em] text-[0.98em] leading-[1.15] font-medium whitespace-nowrap">{title}</p>
    <p className="absolute top-[3.66em] left-[2.18em] text-[0.98em] leading-[1.15] whitespace-nowrap text-secondary">{start} <span className="text-subtle">to</span> {end}</p>
    <AvatarGroup className="absolute top-[1.92em] left-[14.62em] [--avatar-group-size:2.46em]" people={attendees} />
  </div>
)

/** A noninteractive product illustration; all sizing follows its container. */
const AboutHeroVisual = () => (
  <div className="@container relative mx-auto aspect-642/440 w-full max-w-160.5 desktop:ml-0.5 desktop:w-[109.2%] desktop:max-w-none" role="img" aria-label="Stellar dashboard with a project timeline for planning, prototyping, and testing">
    <div aria-hidden="true" className="absolute inset-0 text-[1.5576cqw] leading-none">
      <div className="absolute top-0 left-0 h-[80.75%] w-[90.7%] overflow-hidden rounded-[1.5em] border border-border-subtle bg-surface shadow-floating ring-sm ring-surface">
        <Logo className="absolute top-[1.41em] left-[1.41em] text-[1.7em]" />
        <ul className="absolute top-[7.36em] left-[2.02em]">
          {navigation.map(([label, icon], index) => (
            <li key={label} className={`flex h-[1.6em] items-center whitespace-nowrap not-first:mt-[2.34em] ${index ? 'text-secondary' : 'font-medium text-primary'}`}>
              <Icon className={index ? 'text-gray-500' : 'text-violet-450'}>{icon}</Icon>
              {index === 0 && <span className="ml-[0.95em] size-[0.28em] rounded-pill bg-accent" />}
              <span className={`text-[0.91em] ${index ? 'ml-[1.38em]' : 'ml-[0.63em]'}`}>{label}</span>
            </li>
          ))}
        </ul>
        <div className="absolute top-[1.62em] left-[21.45em] flex h-[2.67em] w-[24.12em] items-center rounded-pill border border-border px-[0.75em] text-secondary">
          <svg className="size-[1.1em]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg>
          <span className="ml-[0.7em] text-[0.9em]">Search</span>
        </div>
        <p className="absolute top-[9.68em] left-[27.4em] text-[0.78em] tracking-[0.08em] whitespace-pre text-secondary">{'PROJECTS   /   STELLAR   /   '}<span className="text-primary">FLOW</span></p>
        <p className="absolute top-[9.6em] left-[20.75em] text-[1.03em] font-semibold">Exploration</p>
        {tabs.map(([label, left, icon]) => (
          <p key={label} className={`absolute top-[14.3em] flex items-center gap-[0.65em] [--icon-size:1.5em] ${label === 'Schematic' ? 'text-primary' : 'text-secondary'}`} style={{ left: `${left}em` }}>
            <Icon className={label === 'Schematic' ? 'text-indigo-300' : 'text-gray-400'}>{icon}</Icon><span className={`text-[0.92em] ${label === 'Schematic' ? 'font-medium' : ''}`}>{label}</span>
          </p>
        ))}
        <span className="absolute top-[13.64em] left-[31.8em] h-px w-[10.06em] bg-gray-150" />
        <div className="absolute top-[16.88em] right-0 bottom-0 left-[18.84em] border-t border-gray-150 bg-background-muted" />
        <span className="absolute top-[16.8em] left-[31.8em] h-[0.15em] w-[10.06em] bg-indigo-300" />
      </div>
      <div className="absolute right-0 bottom-0 h-[56.8%] w-[67.15%] overflow-hidden rounded-[1.4em] border border-border-subtle bg-surface shadow-floating ring-sm ring-surface">
        <p className="absolute top-[2.2em] left-[1.8em] flex items-center font-medium">
          <svg className="size-[1.6em] text-violet-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true"><path d="M12.5 6.5A4.6 4.6 0 0 0 4 5.2M3.5 9.5A4.6 4.6 0 0 0 12 10.8M4 2.6v2.6h2.6M12 13.4v-2.6H9.4" /></svg>
          <span className="ml-[0.8em] text-[1.11em]">Project Timeline</span>
        </p>
        {months.map((month, index) => (
          <span key={month} className="absolute top-[7.96em] w-[4em] -translate-x-1/2 text-center text-[0.76em] text-gray-400" style={{ left: `${(3.1 + index * 4.99) / 0.76}em` }}>{month}</span>
        ))}
        {months.map((month, index) => (
          <span key={month} className="absolute top-[7.7em] bottom-[1.1em] w-px bg-gray-150" style={{ left: `${3.1 + index * 4.99}em` }} />
        ))}
        <TimelineTask className="top-[8.65em] left-[4.22em]" barClassName="bg-pink-300" title="Define & Hypothesize" start="Jan 01" end="June 01" />
        <TimelineTask className="top-[16.38em] left-[14.2em]" barClassName="bg-indigo-500" title="Prototyping & Testing" start="Mar 01" end="Aug 01" />
      </div>
    </div>
  </div>
)

export default AboutHeroVisual
