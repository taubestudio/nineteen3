import ContactForm from '../../components/ContactForm';
import { getDictionary, type Locale } from '../../i18n';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dictionary = getDictionary(params.locale);
  const addressLines = dictionary.contact.address.split('\n');

  return (
    <div className="contact-page-div">
      <h1>{dictionary.contact.title}</h1>
      <div className="contact-page-div-inner">
        <ContactForm labels={dictionary.contactForm} />
        <div className="contact-information">
          <h3>{dictionary.contact.infoTitle}</h3>
          <a href="mailto:info@nineteenproduction.se">info@nineteenproduction.se</a>
          <a href="tel:+46760090613">076 009 06 13</a>
          <span>
            {addressLines[0]}
            <br />
            {addressLines[1]}
          </span>
          <h3>{dictionary.contact.hoursTitle}</h3>
          <p>{dictionary.contact.hours}</p>
        </div>
      </div>
    </div>
  );
}
