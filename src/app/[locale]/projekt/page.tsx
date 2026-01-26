import { getDictionary, isLocale, type Locale } from '../../i18n';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'sv';
  const dictionary = getDictionary(locale);

  return (
    <>
      <div className="grid-container">
        {dictionary.projects.rows.map((row, rowIndex) => (
          <div className="grid-row" key={`row-${rowIndex}`}>
            {row.map((item, itemIndex) => (
              <div className="grid-item" key={`item-${rowIndex}-${itemIndex}`}>
                <p className="grid-item-text">{item.text}</p>
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
