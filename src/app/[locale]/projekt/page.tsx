import { getDictionary, isLocale, type Locale } from '../../i18n';

export default function ProjectPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'sv';
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
