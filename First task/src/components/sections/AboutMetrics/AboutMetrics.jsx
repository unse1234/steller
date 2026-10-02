import Container from '../../layout/Container/Container.jsx'

const metrics = [['22K', '+'], ['64M', '+'], ['94', '%']]

const AboutMetrics = () => (
  <section className="border-y border-border-subtle py-12 desktop:pt-12.25 desktop:pb-10.75" aria-label="Stellar in numbers">
    <Container size="medium">
      <dl className="grid gap-10 tablet:grid-cols-3 tablet:gap-8">
        {metrics.map(([value, suffix]) => (
          <div key={value} className="flex flex-col items-center text-center">
            <dt className="order-2 mt-4.75 max-w-68 text-base leading-relaxed tracking-snug text-secondary">A modest number to start off the metrics section.</dt>
            <dd className="text-display-sm leading-tight font-medium tracking-[normal] opsz-display desktop:text-[2.6875rem]">{value}<span className="text-accent">{suffix}</span></dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
)

export default AboutMetrics
