import { useId, useState } from 'react'
import { classNames } from '../../../utils/classNames.js'
import Button from '../Button/Button.jsx'

const LAYOUTS = {
  stacked: {
    form: 'max-w-85',
    field: 'h-12',
    note: '',
  },
  /* Field and button side by side from tablet width, the note spanning both. */
  inline: {
    form: 'max-w-115.25 gap-y-6 tablet:grid-cols-[minmax(0,1fr)_auto] tablet:gap-x-4',
    field: 'h-12.5',
    note: 'tablet:col-span-full',
  },
}

/**
 * Local-only demo form. Native validation (`type="email"`, `required`) runs
 * before the local confirmation. No address is transmitted or stored.
 * `layout="inline"` sets the button beside the field from tablet width up.
 */
const NewsletterForm = ({
  submitLabel,
  note,
  successMessage,
  layout = 'stacked',
  className,
}) => {
  const inputId = useId()
  const noteId = inputId + '-note'
  const [isSubscribed, setIsSubscribed] = useState(false)
  const styles = LAYOUTS[layout]

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubscribed(true)
    event.currentTarget.reset()
  }

  return (
    <form className={classNames('grid gap-y-3.75', styles.form, className)} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={inputId}>
        Demo email address
      </label>
      <input
        id={inputId}
        className={classNames(
          'rounded-pill border border-border bg-surface px-4 text-md text-primary',
          'transition-[border-color] duration-fast ease-standard placeholder:text-subtle',
          'hover:border-violet-300 focus-visible:border-accent focus-visible:outline-offset-0',
          styles.field,
        )}
        type="email"
        name="email"
        autoComplete="off"
        placeholder="demo@example.com"
        aria-describedby={noteId}
        required
      />
      <Button
        className={classNames('text-md-plus font-regular', styles.field)}
        type="submit"
        variant="primary"
        size="lg"
      >
        {submitLabel}
      </Button>
      <div id={noteId} className={classNames('text-sm text-muted', styles.note)} aria-live="polite">
        {isSubscribed ? successMessage : note}
      </div>
    </form>
  )
}

export default NewsletterForm
