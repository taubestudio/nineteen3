import { getDictionary, type Locale } from '../../i18n';

const aboutImages = {
  first: 'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/IMG_6158.jpg',
  second: 'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/IMG_6120.jpg',
  third: 'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/IMG_6163.jpg',
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { about } = dictionary;

  return (
    <>
      <div className="about-us-outer">
        <div className="about-us">
          <div>
            <h1>{about.title}</h1>
            <h3>{about.subtitle}</h3>
          </div>
          <div>
            <div>
              <h3>{about.productSelection.title}</h3>
              <p>{about.productSelection.text}</p>
            </div>

            <img src={aboutImages.first} alt="Nineteen" />
            <div>
              <h3>{about.packaging.title}</h3>
              <p>{about.packaging.text}</p>
            </div>
          </div>
          <div>
            <div>
              <h3>{about.delivery.title}</h3>
              <p>{about.delivery.text}</p>
            </div>
          </div>
        </div>
        <div className="about-us second">
          <img src={aboutImages.second} alt="Nineteen" />
          <div>
            <h3>{about.design.title}</h3>
            <p>{about.design.text}</p>
          </div>
          <div>
            <h3>{about.production.title}</h3>
            <p>{about.production.text}</p>
          </div>
          <img src={aboutImages.third} alt="Nineteen" />
        </div>
      </div>
    </>
  );
}
