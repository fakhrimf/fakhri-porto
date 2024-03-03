import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'fakhrimf', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['PWPBRelativeLayoutBeneran'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'fakhrimf23',
    instagram: 'fakhrimf23',
    stackoverflow: '12284543/fakhri-mf',
    email: 'fakhrimf23@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Android',
    'MVVM',
    'Java',
    'Compose',
    'Kotlin',
    'Object Oriented Programming',
    'Coroutines',
    'Jetpack',
    'Android',
    'MySQL',
    'Git',
    'C++',
    'Python',
    'Machine Learning',
    'Natural Language Processing',
    'PHP',
    'CSS',
  ],
  experiences: [
    {
      company: 'Informatics Laboratory Telkom University',
      position: 'Laboratory Assistant',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://informatics.labs.telkomuniversity.ac.id/',
    },
    {
      company: 'Informatics Laboratory Telkom University',
      position: 'Practicum Assistant',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://informatics.labs.telkomuniversity.ac.id/',
    },
    {
      company: 'INTER-FEST',
      position: 'Head of Public Relation',
      from: 'August 2022',
      to: 'December 2022',
      companyLink: 'https://www.linkedin.com/company/inter-fest/',
    },
    {
      company: 'Telkom University',
      position: 'Laboratory Research Assistant',
      from: 'June 2022',
      to: 'September 2022',
      companyLink: 'https://telkomuniversity.ac.id/',
    },
    {
      company: 'PT GITS Indonesia',
      position: 'Mobile Developer Intern',
      from: 'October 2019',
      to: 'December 2019',
      companyLink: 'https://gits.id/',
    },
  ],
  certifications: [
    {
      name: 'Belajar Pengembangan Aplikasi Android Intermediate',
      body: 'Dicoding Indonesia',
      year: 'Issued May 2023 - Expires May 2026',
      link: 'https://www.dicoding.com/certificates/4EXGNQEVQZRL',
    },
    {
      name: 'Belajar Membuat Aplikasi Android dengan Jetpack Compose',
      body: 'Dicoding Indonesia',
      year: 'Issued May 2023 - Expires May 2026',
      link: 'https://www.dicoding.com/certificates/JLX1D709GZ72',
    },
    {
      name: 'Belajar Fundamental Aplikasi Android',
      body: 'Dicoding Indonesia',
      year: 'Issued April 2023 - Expires April 2026',
      link: 'https://www.dicoding.com/certificates/JMZV9QYV3PN9',
    },
    {
      name: 'Belajar Membuat Aplikasi Android untuk Pemula',
      body: 'Dicoding Indonesia',
      year: 'Issued March 2023 - Expires March 2026',
      link: 'https://www.dicoding.com/certificates/ERZR0VQ4QXYV',
    },
    {
      name: 'Android Developer Intern',
      body: 'SMKN 4 Bandung',
      year: 'Issued January 2020',
      link: 'https://drive.google.com/file/d/1AtsXpH_nZnILA2NwGtJX1Q-qhHS4R4pe/view',
    },
    {
      name: 'Belajar Dasar Git Dengan Github',
      body: 'Dicoding Indonesia',
      year: 'Issued February 2023 - Expires February 2026',
      link: 'https://www.dicoding.com/certificates/MEPJKMG6JX3V',
    },
    {
      name: 'Programming Logic 101',
      body: 'Dicoding Indonesia',
      year: 'Issued February 2023 - Expires February 2026',
      link: 'https://www.dicoding.com/certificates/MEPJKMG6JX3V',
    },
    {
      name: 'Memulai Dasar Pemrograman untuk Menjadi Software Developer',
      body: 'Dicoding Indonesia',
      year: 'Issued February 2023 - Expires February 2026',
      link: 'https://www.dicoding.com/certificates/MEPJKMGWLX3V',
    },
    {
      name: 'Memulai Pemrograman dengan Kotlin',
      body: 'Dicoding Indonesia',
      year: 'Issued February 2023 - Expires February 2026',
      link: 'https://www.dicoding.com/certificates/NVP79WV9GZR0',
    },
    {
      name: 'Java Programming Course',
      body: 'Oracle',
      year: 'Issued December 2019',
      link: 'https://drive.google.com/file/d/1WBhRep96olY1mUbsK-eHKDkktQsPN5oW/view',
    },
    {
      name: 'Memulai Pemrograman dengan Java',
      body: 'Dicoding Indonesia',
      year: 'Issued February 2023 - Expires February 2026',
      link: 'https://www.dicoding.com/certificates/QLZ92E2M7X5D',
    },
    {
      name: 'TOEIC',
      body: 'ETS',
      year: 'Issued September 2019 -  Expired September 2021',
      link: 'https://www.dicoding.com/certificates/QLZ92E2M7X5D',
    },
    {
      name: 'Seluk Beluk Jaringan Komputer',
      body: 'Coursera',
      year: 'Issued December 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/4F5YGC3XMSY7',
    },
    {
      name: 'Dasar-Dasar Dukungan Teknis',
      body: 'Coursera',
      year: 'Issued December 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/RYESHSELARP2',
    },
  ],
  education: [
    {
      institution: 'Telkom University',
      degree: 'S1 Informatika',
      from: '2020',
      to: 'Present',
    },
    {
      institution: 'SMKN 4 Bandung',
      degree: 'Rekayasa Perangkat Lunak (Software Engineering)',
      from: '2019',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'MuslimLife',
      description:
        'Muslimlife adalah platform pembelajaran untuk umat muslim di Indonesia yang dapat membantu para muslim lebih dekat dengan Allah SWT, bertujuan membantu umat menjadi tauladan dengan sifat pembelajar, gemar berbagi, dan juga produktif.',
      imageUrl:
        'https://play-lh.googleusercontent.com/TfqhoyeLUdpmumIUBbVNyYc9MeXDwAEBdA4tl1OIVwBHVWWvGf9eOQU2ljj_nxvkItQ=s256-rw',
      link: 'https://play.google.com/store/apps/details?id=id.gits.imsakiyah&hl=id&gl=US&pli=1',
    },
    {
      title: 'CoffeeAroundU',
      description:
        'CoffeeAroundU merupakan aplikasi android yang didevelop menggunakan jetpack compose yang mengutilisasikan fitur-fitur android seperti maps dan kamera untuk memesan kopi disekitarmu.',
      imageUrl:
        'https://cdn.discordapp.com/attachments/775027234096414720/1079260345526390834/image.png',
      link: 'https://github.com/fakhrimf/CoffeeAroundUCompose',
    },
    {
      title: 'Hospitality',
      description:
        'Hospitality adalah sebuah aplikasi android yang membantu user untuk melakukan pendaftaran administrasi pada rumah sakit Hospitality dengan mudah dan cepat.',
      imageUrl:
        'https://cdn.discordapp.com/attachments/775027234096414720/1079260345526390834/image.png',
      link: 'https://github.com/fakhrimf/Hospitality',
    },
    {
      title: 'MePet',
      description:
        'MePet adalah sebuah aplikasi reminder dengan platform android, MePet bisa membuat reminder untuk memberi makan hewan kesayangan anda.',
      imageUrl:
        'https://cdn.discordapp.com/attachments/775027234096414720/1079261802526945401/image.png',
      link: 'https://github.com/fakhrimf/MePetKotlin',
    },
    {
      title: 'E-Auction',
      description:
        'E-Auction merupakan sebuah aplikasi auction untuk android. E-Auction memungkinkan user untuk hosting dan menjalankan pelelangan barang mereka dengan mudah.',
      imageUrl:
        'https://cdn.discordapp.com/attachments/775027234096414720/1079263290431111300/image.png',
      link: 'https://github.com/fakhrimf/E-AuctionUKK',
    },
    {
      title: 'WriteUp',
      description:
        'WriteUp merupakan sebuah website media sosial dimana user bisa post dan share blog dan juga cerita sehari hari mereka.',
      imageUrl:
        'https://cdn.discordapp.com/attachments/775027234096414720/1079268303140302898/image.png',
      link: 'https://github.com/SulthonAuliya/WriteUp',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

function App() {
  return <GitProfile config={config} />;
}

export default App;
