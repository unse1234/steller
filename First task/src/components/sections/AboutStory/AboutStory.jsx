import { useRef } from 'react'
import { assets } from '../../../assets/index.js'
import Container from '../../layout/Container/Container.jsx'
import Button from '../../ui/Button/Button.jsx'

const AboutStory = () => {
  const dialogRef = useRef(null)
  const openVideo = () => dialogRef.current?.showModal()

  return (
    <section id="our-story" className="scroll-mt-52 py-section-lg" aria-labelledby="our-story-title">
      <Container className="max-w-[calc(1004px+2*var(--spacing-gutter))]">
        <div className="grid items-start gap-8 tablet:grid-cols-2 tablet:gap-16 desktop:pl-26">
          <h2 id="our-story-title" className="max-w-103 text-display-sm leading-[1.27] font-medium tracking-[normal] opsz-display desktop:text-[2.875rem]">The best software teams ship quickly and often.</h2>
          <div className="pt-2">
            <p className="max-w-77 text-base leading-relaxed tracking-snug text-secondary">With its intuitive interface and powerful features, Stellar empowers businesses to leverage technology for growth.</p>
            <Button className="mt-7.5" onClick={openVideo}>About this build<svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 3v10h14m-5-5 5 5-5 5" /></svg></Button>
          </div>
        </div>
        <button type="button" onClick={openVideo} className="group relative mt-12 block w-full cursor-pointer overflow-hidden rounded-md border-0 bg-background-muted p-0" aria-label="Read about this portfolio build">
          <img src={assets.about.ourStory} alt="A teammate working on a laptop beside a sunlit window" width="714" height="312" loading="lazy" className="h-auto w-full transition-[filter] duration-medium group-hover:brightness-110" />
          <span aria-hidden="true" className="absolute top-[calc(50%-2px)] left-1/2 flex h-11 -translate-1/2 items-center rounded-pill border border-white/40 bg-white/20 px-5 text-sm whitespace-nowrap text-inverse backdrop-blur-[4px]">About this build</span>
        </button>
        <p className="mx-auto mt-11.5 max-w-155 text-center text-base leading-relaxed tracking-snug">This portfolio concept demonstrates a consistent visual system across reusable sections, responsive layouts and accessible interactions.</p>
      </Container>
      <dialog ref={dialogRef} aria-labelledby="story-video-title" className="fixed inset-0 m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-150 overflow-y-auto rounded-lg border border-border bg-surface p-8 text-primary shadow-floating backdrop:bg-gray-950/50" onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close() }}>
        <div className="flex items-center justify-between gap-6">
          <h2 id="story-video-title" className="text-xl font-medium">A front-end concept by M.Unse</h2>
          <button type="button" className="grid size-10 cursor-pointer place-items-center rounded-pill border border-border bg-surface" onClick={() => dialogRef.current.close()} aria-label="Close details"><img src={assets.icons.close} alt="" className="size-4" /></button>
        </div>
        <p className="mt-6 text-base leading-comfortable text-secondary">M.Unse implemented this Stellar template concept with React, Vite and Tailwind CSS. The original design is credited to Flowbase. Product screens, figures and profiles are illustrative; no live SaaS service or accounts are provided.</p>
      </dialog>
    </section>
  )
}

export default AboutStory
