export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];

type ProjectItem = {
  text: string;
  image: string;
  alt: string;
};

type TechniqueItem = {
  title: string;
  image: string;
  alt: string;
};

export type ContactFormLabels = {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  submitted: string;
  errorMessage: string;
};

const projectImages = [
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/stora-bageriet-1.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/stora-bageriet-2.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/stora-bageriet-3.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/intrum.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/menomale.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/wall-1.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/wall-2.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/wall-3.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/harkommerlyckan-bild.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/pass-me-the-wine.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/clean-1.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/clean-2.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/clean-3.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/pim-basketboll.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/pim-2.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/ilove19-hoodie-ig%202.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/lunds-keps-hemsida.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/hailey-flaska-ig.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/tjuvjakt-1.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/tjuvjakt-2.jpeg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/hailey-tee-ig2.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/ska%CC%8Alen-hoodie-ig.png',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/du-vest-ig.png',
];

const techniqueImages = [
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Screentryck.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/High-Density-Print.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/brodyr2.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/3D-brodyr.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/DTG1.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/DTF.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Sublimerat.jpg',
  'https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/vavd.jpg',
];

const dictionary = {
  sv: {
    nav: {
      projects: 'projekt',
      techniques: 'trycktekniker',
      about: 'om oss',
      contact: 'kontakt',
    },
    home: {
      projectsButton: 'tidigare projekt',
      contactButton: 'kontakta oss',
    },
    about: {
      title: 'om oss',
      subtitle: 'en modern one-stop-shop',
      productSelection: {
        title: 'produktval',
        text:
          'I vår katalog med över 600 000 artiklar kan det vara lätt att gå vilse. Vi hjälper er att hitta rätt i allt från kläder till accessoarer och mässmaterial utefter ert projekt och önskemål. Finns inte det ni letar efter? Då skräddarsyr vi det åt er!',
      },
      packaging: {
        title: 'emballage & smådetaljer',
        text:
          'Eget emballage, tejp eller klädetiketter är små detaljer som gör stor skillnad. Bygg ihop ett heltäckande paket för att sätta standarden ni förtjänar.',
      },
      delivery: {
        title: 'leverans',
        text:
          'Ny och fräsch merchandise levereras. En snabb och smärtfri process med garanterat bra resultat!',
      },
      design: {
        title: 'grafisk designhjälp',
        text:
          'Saknar ni logotyp eller vill testa på en ny design hjälper våra grafiker till att ta fram motiv.',
      },
      production: {
        title: 'produktion',
        text:
          'Majoriteten av vårt utbud produceras och dekoreras i Europa. Det innebär en både etisk och miljövänlig produktion, men också nedkortade ledtider på ca 1-3 veckor! Har ni bråttom? Expressalternativ finns givetvis också.',
      },
    },
    contact: {
      title: 'kontakta oss',
      infoTitle: 'kontaktinformation',
      address: 'Norr Mälarstrand 32,\n112 20 Stockholm, Sverige',
      hoursTitle: 'öppettider',
      hours: 'Måndag till Fredag: 09:00 - 17:00',
    },
    contactForm: {
      namePlaceholder: 'namn',
      emailPlaceholder: 'e-post',
      phonePlaceholder: 'telefon',
      messagePlaceholder: 'meddelande',
      submit: 'skicka',
      submitting: 'skickar...',
      submitted: 'skickat',
      errorMessage: 'kunde inte skicka meddelandet. försök igen.',
    },
    techniques: {
      title: 'trycktekniker',
      description:
        'Det finns mängder av olika trycktekniker, alla med olika fördelar. Vilken teknik som lämpar sig bäst för ditt projekt avgörs av antal, material och önskad känsla!\n\nKontakta oss så hjälper vi dig med ditt projekt!',
      contactCta: 'kontakta oss',
      items: [
        { title: 'screentryck', image: techniqueImages[0], alt: 'Screentryck' },
        {
          title: 'high density print',
          image: techniqueImages[1],
          alt: 'High Density Print',
        },
        { title: 'brodyr', image: techniqueImages[2], alt: 'Brodyr' },
        { title: '3d-brodyr', image: techniqueImages[3], alt: '3D-brodyr' },
        { title: 'dtg', image: techniqueImages[4], alt: 'DTG' },
        { title: 'dtf', image: techniqueImages[5], alt: 'DTF' },
        { title: 'sublimering', image: techniqueImages[6], alt: 'Sublimering' },
        { title: 'vävd', image: techniqueImages[7], alt: 'Vävd' },
      ] as TechniqueItem[],
    },
    projects: {
      rows: [
        [
          {
            text: 't-shirt till stora bageriet',
            image: projectImages[0],
            alt: 'Stora Bageriet',
          },
          {
            text: 't-shirt till stora bageriet',
            image: projectImages[1],
            alt: 'Stora Bageriet',
          },
          {
            text: 't-shirt till stora bageriet',
            image: projectImages[2],
            alt: 'Stora Bageriet',
          },
        ],
        [
          {
            text: 'vinöppnare till intrum',
            image: projectImages[3],
            alt: 'Intrum',
          },
          {
            text: 't-shirt till meno male',
            image: projectImages[4],
            alt: 'Menomale',
          },
        ],
        [
          {
            text: 't-shirt till wall',
            image: projectImages[5],
            alt: 'Wall Nightclub',
          },
          {
            text: 'tändare till wall',
            image: projectImages[6],
            alt: 'Wall Nightclub',
          },
          {
            text: 'hoodie till wall',
            image: projectImages[7],
            alt: 'Wall Nightclub',
          },
        ],
        [
          {
            text: 'totebag med motiv',
            image: projectImages[8],
            alt: 'Totebag Med Tryck',
          },
          {
            text: 't-shirt till pass me the wine',
            image: projectImages[9],
            alt: 'Pass Me The Wine',
          },
        ],
        [
          {
            text: 'badbyxor till clean drink',
            image: projectImages[10],
            alt: 'Clean Drinks',
          },
          {
            text: 'frisbee till clean drink',
            image: projectImages[11],
            alt: 'Clean Drinks',
          },
          {
            text: 'hoodie till clean drink',
            image: projectImages[12],
            alt: 'Clean Drinks',
          },
        ],
        [
          {
            text: 'basketboll till pim studios',
            image: projectImages[13],
            alt: 'Pim Studios',
          },
          {
            text: 'dunjacka till pim studios',
            image: projectImages[14],
            alt: 'Pim studios',
          },
        ],
        [
          {
            text: 'hoodie till vårt team',
            image: projectImages[15],
            alt: 'Totebag Med Tryck',
          },
          {
            text: 'keps till lund nation',
            image: projectImages[16],
            alt: 'Pass Me The Wine',
          },
          {
            text: 'vattenflaska till hailey hr',
            image: projectImages[17],
            alt: 'Pim Studios',
          },
        ],
        [
          {
            text: 'broderarad hoodie till tjuvjakt',
            image: projectImages[18],
            alt: 'Tjuvjakt',
          },
          {
            text: 'broderarad hoodie till tjuvjakt',
            image: projectImages[19],
            alt: 'Tjuvjakt',
          },
        ],
        [
          {
            text: 't-shirt till hailey hr',
            image: projectImages[20],
            alt: 'Totebag Med Tryck',
          },
          {
            text: 'hoodie till skålen',
            image: projectImages[21],
            alt: 'Pass Me The Wine',
          },
          {
            text: 'fleeceväst till daglig utveckling',
            image: projectImages[22],
            alt: 'Pim Studios',
          },
        ],
      ] as ProjectItem[][],
    },
  },
  en: {
    nav: {
      projects: 'projects',
      techniques: 'printing techniques',
      about: 'about us',
      contact: 'contact',
    },
    home: {
      projectsButton: 'projects',
      contactButton: 'contact us',
    },
    about: {
      title: 'about us',
      subtitle: 'a modern one-stop-shop',
      productSelection: {
        title: 'product selection',
        text:
          "In our catalog with over 600,000 items, it can be easy to get lost. We help you find the right products, from clothing to accessories and exhibition materials, tailored to your project and wishes. Can't find what you're looking for? Then we'll customize it for you!",
      },
      packaging: {
        title: 'packaging & small details',
        text:
          'Custom packaging, tape, or clothing labels are small details that make a big difference. Put together a comprehensive package to set the standard you deserve.',
      },
      delivery: {
        title: 'delivery',
        text:
          'New and fresh merchandise delivered. A quick and painless process with guaranteed great results!',
      },
      design: {
        title: 'graphic design assistance',
        text:
          'If you lack a logo or want to try out a new design, our graphic designers are here to help create the artwork.',
      },
      production: {
        title: 'production',
        text:
          'The majority of our products are produced and decorated in Europe. This ensures both ethical and environmentally friendly production, as well as shorter lead times of about 1-3 weeks! In a hurry? Express options are of course also available.',
      },
    },
    contact: {
      title: 'contact us',
      infoTitle: 'contact information',
      address: 'Norr Mälarstrand 32,\n112 20 Stockholm, Sweden',
      hoursTitle: 'opening hours',
      hours: 'Monday to Friday: 09:00 - 17:00',
    },
    contactForm: {
      namePlaceholder: 'name',
      emailPlaceholder: 'email',
      phonePlaceholder: 'phone',
      messagePlaceholder: 'message',
      submit: 'send',
      submitting: 'sending...',
      submitted: 'sent',
      errorMessage: 'error sending message. please try again.',
    },
    techniques: {
      title: 'printing techniques',
      description:
        'There are many different printing techniques, each with its own advantages. Which technique is most suitable for your project depends on quantity, material, and the desired look and feel!\n\nContact us and we will help you with your project!',
      contactCta: 'contact us',
      items: [
        { title: 'screen print', image: techniqueImages[0], alt: 'Screen Print' },
        {
          title: 'high density print',
          image: techniqueImages[1],
          alt: 'High Density Print',
        },
        { title: 'embroidery', image: techniqueImages[2], alt: 'Embroidery' },
        {
          title: '3d embroidery',
          image: techniqueImages[3],
          alt: '3D Embroidery',
        },
        { title: 'dtg', image: techniqueImages[4], alt: 'DTG' },
        { title: 'dtf', image: techniqueImages[5], alt: 'DTF' },
        { title: 'sublimation', image: techniqueImages[6], alt: 'Sublimation' },
        { title: 'woven', image: techniqueImages[7], alt: 'Woven' },
      ] as TechniqueItem[],
    },
    projects: {
      rows: [
        [
          {
            text: 't-shirt for stora bageriet',
            image: projectImages[0],
            alt: 'Stora Bageriet',
          },
          {
            text: 't-shirt for stora bageriet',
            image: projectImages[1],
            alt: 'Stora Bageriet',
          },
          {
            text: 't-shirt for stora bageriet',
            image: projectImages[2],
            alt: 'Stora Bageriet',
          },
        ],
        [
          {
            text: 'wine opener for intrum',
            image: projectImages[3],
            alt: 'Intrum',
          },
          {
            text: 't-shirt for meno male',
            image: projectImages[4],
            alt: 'Menomale',
          },
        ],
        [
          {
            text: 't-shirt for wall',
            image: projectImages[5],
            alt: 'Wall Nightclub',
          },
          {
            text: 'lighter for wall',
            image: projectImages[6],
            alt: 'Wall Nightclub',
          },
          {
            text: 'hoodie for wall',
            image: projectImages[7],
            alt: 'Wall Nightclub',
          },
        ],
        [
          {
            text: 'totebag with design',
            image: projectImages[8],
            alt: 'Totebag With Design',
          },
          {
            text: 't-shirt for pass me the wine',
            image: projectImages[9],
            alt: 'Pass Me The Wine',
          },
        ],
        [
          {
            text: 'swim shorts for clean drink',
            image: projectImages[10],
            alt: 'Clean Drinks',
          },
          {
            text: 'frisbee for clean drink',
            image: projectImages[11],
            alt: 'Clean Drinks',
          },
          {
            text: 'hoodie for clean drink',
            image: projectImages[12],
            alt: 'Clean Drinks',
          },
        ],
        [
          {
            text: 'basketball for pim studios',
            image: projectImages[13],
            alt: 'Pim Studios',
          },
          {
            text: 'down jacket for pim studios',
            image: projectImages[14],
            alt: 'Pim studios',
          },
        ],
        [
          {
            text: 'hoodie for our team',
            image: projectImages[15],
            alt: 'Hoodie for our team',
          },
          {
            text: 'cap for lund nation',
            image: projectImages[16],
            alt: 'Cap for Lund Nation',
          },
          {
            text: 'water bottle for hailey hr',
            image: projectImages[17],
            alt: 'Water bottle for Hailey HR',
          },
        ],
        [
          {
            text: 'embroidered hoodie for tjuvjakt',
            image: projectImages[18],
            alt: 'Tjuvjakt',
          },
          {
            text: 'embroidered hoodie for tjuvjakt',
            image: projectImages[19],
            alt: 'Tjuvjakt',
          },
        ],
        [
          {
            text: 't-shirt for hailey hr',
            image: projectImages[20],
            alt: 'T-shirt for Hailey HR',
          },
          {
            text: 'hoodie for skålen',
            image: projectImages[21],
            alt: 'Hoodie for Skålen',
          },
          {
            text: 'fleece vest for daglig utveckling',
            image: projectImages[22],
            alt: 'Fleece vest for Daglig Utveckling',
          },
        ],
      ] as ProjectItem[][],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return (locales as readonly string[]).includes(segment) ? (segment as Locale) : 'sv';
}
