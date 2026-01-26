'use client';

import { useState } from 'react';
import type { ContactFormLabels } from '../i18n';

type ContactFormProps = {
  labels: ContactFormLabels;
};

export default function ContactForm({ labels }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      // Clear the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFormSubmitted(true); // Set the form submitted state to true
      setIsSubmitting(false); // Reset the submitting state
      setTimeout(() => setFormSubmitted(false), 3000); // Reset button text after 3 seconds
    } else {
      alert(labels.errorMessage);
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <div className='form-div'>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={labels.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <input
          type="email"
          placeholder={labels.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <input
          type="tel"
          placeholder={labels.phonePlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className='form-div'>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder={labels.messagePlaceholder}
        />
      </div>
      
      <button
        type="submit"
        className='submit'
        disabled={isSubmitting || formSubmitted}
      >
        {formSubmitted
          ? labels.submitted
          : isSubmitting
            ? labels.submitting
            : labels.submit}
      </button>
    </form>
  );
}
