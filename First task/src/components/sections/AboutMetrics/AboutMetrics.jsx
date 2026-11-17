import Container from '../../layout/Container/Container.jsx'

const metrics = [
  { value: '2', label: 'Pages to explore: Home and About' },
  { value: 'React', label: 'Reusable interface components' },
  { value: 'CSS', label: 'Responsive layouts across screen sizes' },
]

const AboutMetrics = () => (
  <section className="border-y border-border-subtle py-12 desktop:pt-12.25 desktop:pb-10.75" aria-label="About this front-end build">
    <Container size="medium">
      <dl className="grid gap-10 tablet:grid-cols-3 tablet:gap-8">
        {metrics.map(({ value, label }) => (
          <div key={value} className="flex flex-col items-center text-center">
            <dt className="order-2 mt-4.75 max-w-68 text-base leading-relaxed tracking-snug text-secondary">{label}</dt>
            <dd className="text-display-sm leading-tight font-medium tracking-[normal] opsz-display desktop:text-[2.6875rem]">{value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
)

export default AboutMetrics
