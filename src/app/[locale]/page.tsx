import Link from 'next/link';
import { getDictionary, isLocale, type Locale } from '../i18n';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'sv';
  const dictionary = getDictionary(locale);
  const basePath = `/${locale}`;

  return (
    <>
      <div className="hero-section">
        <div className="hero-div">
          <Link href={`${basePath}/projekt`}>
            <button>{dictionary.home.projectsButton}</button>
          </Link>
          <img
            src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/threads.png"
            alt="threads"
          />
        </div>
        <div className="hero-div">
          <Link href={`${basePath}/contact`}>
            <button>{dictionary.home.contactButton}</button>
          </Link>
          <img
            src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/orange-fabrics.png"
            alt="threads"
          />
        </div>
      </div>
    </>
  );
}
