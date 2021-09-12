const FORBOLE_URL = 'https://www.forbole.com';
const BIG_DIPPER_URL = 'https://bigdipper.live';

const GITHUB_URL = 'https://github.com/cosmoscontracts';
const JUNO_DOCS = 'https://docs.junochain.com/';
const JUNO_DISCORD = 'https://discord.gg/QcWPfK4gJ2';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'junoscan',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
  {
    key: 'juno',
    links: [
      {
        key: 'github',
        url: GITHUB_URL,
      },
      {
        key: 'docs',
        url: JUNO_DOCS,
      },
      {
        key: 'supportOnDiscord',
        url: JUNO_DISCORD,
      },
    ],
  },
];
