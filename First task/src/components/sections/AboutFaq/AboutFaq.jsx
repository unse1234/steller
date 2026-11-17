import Container from '../../layout/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const questions = [
  { id: 'getting-started', question: 'Is Stellar a live product?', answer: 'No. This is a portfolio concept showing the front-end implementation of a SaaS website. Product figures, profiles, brand examples and quotes are demonstration content.' },
  { id: 'your-team', question: 'What happens when I try the form?', answer: 'The browser checks the example email address and shows a demo confirmation. Nothing is sent or stored, and no account or subscription is created.' },
  { id: 'support', question: 'Can I hire the developer for my website?', answer: 'Yes. Use the Hire me link or email muhammadunse11@gmail.com with your design, content and deadline. M.Unse will confirm the scope, quote and availability before work begins.' },
]

const AboutFaq = () => (
  <section aria-labelledby="about-faq-heading" className="py-section-lg desktop:pt-37 desktop:pb-41.5">
    <Container size="medium">
      <SectionHeading
        eyebrow="About the demo"
        title={<>Frequently Asked<br />Questions</>}
        titleId="about-faq-heading"
        size="xl"
        align="center"
        className="[&>p]:text-xs"
        titleClassName="mt-3.5"
      />

      <div className="relative isolate mx-auto mt-13.5 grid max-w-163.5 gap-6.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-1 aspect-square w-[min(440px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-background-muted"
        />
        {questions.map(({ id, question, answer }) => (
          <details
            key={id}
            name="about-faq"
            className="group rounded-sm border border-border bg-surface ring-sm ring-surface"
          >
            <summary className="flex min-h-[89px] cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-base font-medium tablet:px-8 [&::-webkit-details-marker]:hidden">
              {question}
              <svg
                aria-hidden="true"
                className="size-4 flex-none text-subtle transition-transform duration-fast group-open:rotate-180"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="m4 6 4 4 4-4H4Z" />
              </svg>
            </summary>
            <p className="px-6 pb-7 text-md leading-comfortable text-secondary tablet:px-8">{answer}</p>
          </details>
        ))}
      </div>
    </Container>
  </section>
)

export default AboutFaq
