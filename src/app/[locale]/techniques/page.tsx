import Link from 'next/link';
import { getDictionary, type Locale } from '../../i18n';

export default async function TechniquesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const descriptionLines = dictionary.techniques.description.split('\n');
  const items = dictionary.techniques.items;

  return (
    <>
      <div className="tekniker">
        <div>
          <h1>{dictionary.techniques.title}</h1>
          <p>
            {descriptionLines.map((line, index) => (
              <span key={`line-${index}`}>
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <Link href={`/${locale}/contact`}>
            <button>{dictionary.techniques.contactCta}</button>
          </Link>
        </div>
        <div className="grid-item-techniques">
          <img src={items[0].image} alt={items[0].alt} />
          <span>{items[0].title}</span>
        </div>
      </div>
      <div className="tekniker">
        <div className="grid-item-techniques">
          <img src={items[1].image} alt={items[1].alt} />
          <span>{items[1].title}</span>
        </div>
        <div className="grid-item-techniques">
          <img src={items[2].image} alt={items[2].alt} />
          <span>{items[2].title}</span>
        </div>
      </div>
      <div className="tekniker2">
        <div className="grid-item-techniques">
          <img src={items[3].image} alt={items[3].alt} />
          <span>{items[3].title}</span>
        </div>
        <div className="grid-item-techniques">
          <img src={items[4].image} alt={items[4].alt} />
          <span>{items[4].title}</span>
        </div>
        <div className="grid-item-techniques">
          <img src={items[5].image} alt={items[5].alt} />
          <span>{items[5].title}</span>
        </div>
      </div>
      <div className="tekniker last">
        <div className="grid-item-techniques">
          <img src={items[6].image} alt={items[6].alt} />
          <span>{items[6].title}</span>
        </div>
        <div className="grid-item-techniques">
          <img src={items[7].image} alt={items[7].alt} />
          <span>{items[7].title}</span>
        </div>
      </div>
    </>
  );
}
