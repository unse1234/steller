import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const team = [
  { name: 'Jake Weary', role: 'Lead Designer', avatar: assets.teamPortraits.jakeWeary },
  { name: 'Sadie Berlin', role: 'UI Designer', avatar: assets.teamPortraits.sadieBerlin },
  { name: 'Dylan Meringu', role: 'Art Director', avatar: assets.teamPortraits.dylanMeringu },
  { name: 'Amaya Locosta', role: 'UI Designer', avatar: assets.teamPortraits.amayaLocosta },
  { name: 'Sam Smith', role: 'UX Designer', avatar: assets.teamPortraits.samSmith },
  { name: 'Cecilia Evans', role: 'UI Designer', avatar: assets.teamPortraits.ceciliaEvans },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: assets.icons.facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: assets.icons.instagram },
  { name: 'Twitter', href: 'https://twitter.com/', icon: assets.icons.twitter },
]

const AboutTeam = () => (
  <section id="team" aria-labelledby="about-team-heading" className="py-section-lg desktop:pt-[117px] desktop:pb-[127px]">
    <Container size="medium">
      <div className="flex flex-col justify-between gap-5 desktop:flex-row desktop:items-end desktop:gap-20">
        <SectionHeading
          eyebrow="Our Team"
          title="Stellar, Team"
          titleId="about-team-heading"
          size="xl"
          titleClassName="mt-[21px] tracking-snug"
        />
        <p className="max-w-148 text-base leading-relaxed tracking-snug text-secondary">
          Uncover hidden patterns, track user behavior, and make data-driven decisions to propel your
          business forward.
        </p>
      </div>

      <ul className="mt-10 grid gap-8 tablet:grid-cols-2 desktop:mt-14.5 desktop:grid-cols-3 desktop:gap-10 desktop:px-1.25">
        {team.map(({ name, role, avatar }) => (
          <li key={name} className="relative isolate overflow-hidden rounded-sm bg-background-muted p-6 pb-8 ring-sm ring-surface shadow-ring-edge tablet:p-7 tablet:pt-8 tablet:pb-6.75">
            <img
              src={avatar}
              alt=""
              width="163"
              height="163"
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute top-1/2 -right-1 -z-1 size-36 -translate-y-1/2 object-contain desktop:-right-0.75 desktop:size-40.75"
            />
            <h3 className="max-w-[calc(100%-76px)] text-[22px] leading-tight font-medium tracking-snugger desktop:max-w-[calc(100%-92px)]">{name}</h3>
            <p className="mt-1.25 max-w-[calc(100%-76px)] text-md leading-5 text-secondary desktop:max-w-[calc(100%-92px)]">
              {role}, <span className="text-accent">Flowbase</span>
            </p>
            <ul className="mt-11.5 flex gap-2.5" aria-label={`${name} social media`}>
              {socialLinks.map(({ name: network, href, icon }) => (
                <li key={network}>
                  <a
                    href={href}
                    aria-label={network}
                    className="grid size-9.5 place-items-center rounded-[50%] border border-border bg-surface transition-[border-color] duration-fast ease-standard hover:border-violet-300"
                  >
                    <img src={icon} alt="" className="size-3.75 object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  </section>
)

export default AboutTeam
