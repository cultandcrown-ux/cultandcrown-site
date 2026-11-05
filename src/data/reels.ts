// Reels shown in the "On Instagram" carousel on the homepage.
// cover: 9:16 image in /public/images/reels. If missing, a typographic poster is drawn instead.
export const REELS = [
  {
    film: 'James Bond',
    year: '007',
    watch: 'Every Omega worn by 007',
    tone: 'noir',
    cover: '/images/reels/omega-007-daniel-craig.webp',
    alt: 'Daniel Craig as James Bond with an Omega Seamaster Planet Ocean, Cult & Crown reel cover',
    url: 'https://www.instagram.com/reel/DbD4yw0tqqC/',
  },
  {
    film: 'Le Mans',
    year: '1971',
    watch: 'Heuer Monaco',
    tone: 'teal',
    cover: '/images/reels/heuer-monaco-le-mans.webp',
    alt: 'Steve McQueen in Le Mans with the blue Heuer Monaco chronograph, Cult & Crown reel cover',
    url: 'https://www.instagram.com/reel/Daf1-p5Nooq/',
  },
  {
    film: 'Apocalypse Now',
    year: '1979',
    watch: 'Rolex GMT-Master 1675',
    tone: 'sepia',
    cover: '/images/reels/rolex-gmt-brando-apocalypse-now.webp',
    alt: "Marlon Brando as Colonel Kurtz with his bezel-less Rolex GMT-Master 1675, Cult & Crown reel cover",
    url: 'https://www.instagram.com/reel/DadRY6ONPYI/',
  },
  {
    film: 'Apocalypse Now',
    year: '1979',
    watch: 'Seiko 6105 "Willard"',
    tone: 'noir',
    cover: '/images/reels/seiko-willard-apocalypse-now.webp',
    alt: 'Martin Sheen as Captain Willard with the Seiko 6105 diver, Cult & Crown reel cover',
    url: 'https://www.instagram.com/reel/DaYIQzfNf51/',
  },
] as const;
