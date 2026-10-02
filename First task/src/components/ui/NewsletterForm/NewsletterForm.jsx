import { useId, useState } from 'react'
import { classNames } from '../../../utils/classNames.js'
import Button from '../Button/Button.jsx'
import './NewsletterForm.css'

/**
 * Email capture form. Native validation (`type="email"`, `required`) runs
 * before `onSubscribe`; the note below the fields announces the result.
 * `layout="inline"` sets the button beside the field from tablet width up.
 */
const NewsletterForm = ({
  submitLabel,
  note,
  successMessage,
  onSubscribe,
  layout = 'stacked',
  className,
}) => {
  const inputId = useId()
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')
    onSubscribe?.(email)
    setIsSubscribed(true)
    event.currentTarget.reset()
  }

  return (
    <form
      className={classNames('newsletter-form', `newsletter-form--${layout}`, className)}
      onSubmit={handleSubmit}
    >
      <label className="visually-hidden" htmlFor={inputId}>
        Email address
      </label>
      <input
        id={inputId}
        className="newsletter-form__input"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="name@email.com"
        required
      />
      <Button className="newsletter-form__submit" type="submit" variant="primary" size="lg">
        {submitLabel}
      </Button>
      <div className="newsletter-form__note" aria-live="polite">
        {isSubscribed ? successMessage : note}
      </div>
    </form>
  )
}

export default NewsletterForm
