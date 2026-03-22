export const projects = [
  {
    title: "GIS Asset Manager UI",
    type: "Open Source JavaScript Module",
    description:
    "GIS Asset Manager UI is an open-source JavaScript module that utilizes the ArcGIS Maps SDK for JavaScript to create an interactive map that can be configured with various different graphic layers. Users can select assets contained within the graphic layers by mouse click and/or add new assets using the sketch feature. The module can be configured to fit a specific use case by passing property values to the module's custom elements. GIS Asset Manager UI is intended for use within a parent application. When the asset requirements have been met, a custom event is triggered making the array of chosen assets and/or the array of created assets, available to the parent application. The parent application can then receive and consume the data as needed. I developed this project as part of my job with the City of St. Louis. It is currently used on several permit applications for city residents and businesses. I am proud to have developed the first open source software released by the City of St. Louis.",
    descriptionLink: {
    text: "permit applications",
    url: "https://www.stlouis-mo.gov/government/departments/street/permits-inspections/blocking-application.cfm",
    beforeText: "GIS Asset Manager UI is an open-source JavaScript module that utilizes the ArcGIS Maps SDK for JavaScript to create an interactive map that can be configured with various different graphic layers. Users can select assets contained within the graphic layers by mouse click and/or add new assets using the sketch feature. The module can be configured to fit a specific use case by passing property values to the module's custom elements. GIS Asset Manager UI is intended for use within a parent application. When the asset requirements have been met, a custom event is triggered making the array of chosen assets and/or the array of created assets, available to the parent application. The parent application can then receive and consume the data as needed. I developed this project as part of my job with the City of St. Louis. It is currently used on several ",
    afterText: " for city residents and businesses. I am proud to have developed the first open source software released by the City of St. Louis."
  },
    technologies: [
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
       {
        name: "JavaScript Modules",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "Web Components",
        url: "https://developer.mozilla.org/docs/Web/Web_Components",
      },
      { name: "HTML", url: "https://developer.mozilla.org/docs/Web/HTML" },
      { 
        name: "CSS", 
        url: "https://developer.mozilla.org/docs/Web/CSS"
      },
      { 
        name: "ArcGIS Maps SDK",
        url: "https://developers.arcgis.com/javascript/latest",
      },
      {
        name: "npm",
        url: "https://www.npmjs.com/",
      },
      {
        name: "Rollup",
        url: "https://rollupjs.org/",
      },
      { name: "GIS", url: "https://www.esri.com/en-us/what-is-gis/overview" },
        // {
      //   name: "",
      //   url: "",
      // },
        // {
      //   name: "",
      //   url: "",
      // },
        // {
      //   name: "",
      //   url: "",
      // },
    ],
    role: ["Lead Developer"],
    url: "https://city-of-saint-louis.github.io/gis-asset-manager-ui",
    // gitHubRepo: "private",
    gitHubRepo: "https://github.com/city-of-saint-louis/gis-asset-manager-ui",
    npmUrl: "https://www.npmjs.com/package/@cityofstlouis/gis-asset-manager-ui",
    repoPrivacyMessage:
      "Thank you for your interest in this project. Indie Stream is a work in progress and not yet ready for public viewing. In order to respect the privacy of the artists who have shared their music on the platform, this repository is private. If you have any questions about how the app is built, please feel free to reach out. I'd love to tell you all about it.",
    images: {
      mobile: [
        "/images/gis-asset-manager/mobile/select.jpg",
        "/images/gis-asset-manager/mobile/select-valid.jpg",
        "/images/gis-asset-manager/mobile/sketch.jpg",
        "/images/gis-asset-manager/mobile/sketch2.jpg",
        "/images/gis-asset-manager/mobile/sketch3.jpg",
        "/images/gis-asset-manager/mobile/select-sketch.jpg",
        "/images/gis-asset-manager/mobile/select-sketch-select.jpg",
        "/images/gis-asset-manager/mobile/select-sketch-sketch.jpg",
        
        // "/images/gis-asset-manager/mobile/.jpg",
      ],
      desktop: [
        "/images/gis-asset-manager/desktop/select.png",
        "/images/gis-asset-manager/desktop/select-valid.png",
        "/images/gis-asset-manager/desktop/sketch.png",
        "/images/gis-asset-manager/desktop/select-sketch.png",
        "/images/gis-asset-manager/desktop/select-sketch2.png",
        "/images/gis-asset-manager/desktop/select-sketch3.png",
        // "/images/gis-asset-manager/desktop/.png",
      ],
    },
    guestCredentials: undefined,
  },
  {
    title: "indieStream",
    type: "Full Stack Application",
    description:
      "Installable Progressive Web Application featuring push notifications. Music streaming app for independent artists. Users can sign up to make an account. Discover and listen to music from independent artists. Save artists, songs, and releases for easy access. Create and listen to playlists. Still in development. Not fully functional yet, but the music player is operational. The app is currently populated with music from artists who have shared their work with me for the purpose of testing and development.",
    technologies: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/docs/",
      },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "React", url: "https://react.dev" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },

      { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
      {
        name: "SQL",
        url: "https://www.w3schools.com/sql/",
      },
      { name: "Postgres", url: "https://www.postgresql.org/docs/" },
      { name: "Vercel", url: "https://vercel.com/docs" },
      {
        name: "Vercel Analytics",
        url: "https://vercel.com/docs/analytics",
      },
      {
        name: "Next Auth",
        url: "https://next-auth.js.org/",
      },

      {
        name: "bcrypt",
        url: "https://www.npmjs.com/package/bcrypt",
      },
      {
        name: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
      // {
      //   name: "",
      //   url: "",
      // },
    ],
    role: ["Sole Developer"],
    url: "https://indie-stream.vercel.app/",
    // gitHubRepo: "private",
    gitHubRepo: "https://github.com/KLong75/indie-stream",
    npmUrl: undefined,
    repoPrivacyMessage:
      "Thank you for your interest in this project. Indie Stream is a work in progress and not yet ready for public viewing. In order to respect the privacy of the artists who have shared their music on the platform, this repository is private. If you have any questions about how the app is built, please feel free to reach out. I'd love to tell you all about it.",
    images: {
      mobile: [
        "/images/indie-stream/mobile/home.jpg",
        // "/images/indie-stream/mobile/login.png",
        "/images/indie-stream/mobile/welcome-back.jpg",
        "/images/indie-stream/mobile/last-night.jpg",
        "/images/indie-stream/mobile/cyberchondria.jpg",
        "/images/indie-stream/mobile/po-releases.jpg",
        "/images/indie-stream/mobile/releases.jpg",
        // "/images/indie-stream/mobile/video-editing.png",
      ],
      desktop: [
        "/images/indie-stream/desktop/home.png",
        "/images/indie-stream/desktop/login.png",
        "/images/indie-stream/desktop/welcome-back.png",
        "/images/indie-stream/desktop/cyberchondria.png",
        "/images/indie-stream/desktop/last-night.png",
        "/images/indie-stream/desktop/worthwhile.png",
        "/images/indie-stream/desktop/artists.png",
        "/images/indie-stream/desktop/songs.png",
        "/images/indie-stream/desktop/releases.png",
      ],
    },
    guestCredentials: {
      email: "guest@example.com",
      password: "password",
    },
  },
  {
    title: "mikemartinmedia.com",
    type: "Business Website",
    description:
      "Mike Martin Media is an multi media production company based in St Louis, Missouri and working all around the world. They have trusted me with their website since 2023. This is the third iteration of their site that I have worked on. Fully responsive and accessible, mikemartinmedia.com features a sortable video and photo gallery, embedded video content, a blog, and a contact form. Integrated with Google Tag Manager and Google Analytics for running ads and monitoring site traffic. Cookie consent management is handled with Cookie Yes. The website was designed by Seafoam Media.",
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Vercel", url: "https://vercel.com/docs" },
      { name: "React", url: "https://react.dev" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
      { name: "Headless UI", url: "https://headlessui.com/react" },
      {
        name: "Google Tag Manager",
        url: "https://support.google.com/tagmanager/answer/6102821",
      },
      {
        name: "Google Analytics",
        url: "https://support.google.com/analytics/answer/1008015",
      },
      {
        name: "Google Search Console",
        url: "https://support.google.com/webmasters/answer/9128668",
      },
      { name: "Cookie Yes", url: "https://www.cookieyes.com/documentation/" },
      {
        name: "Swiper",
        url: "https://swiperjs.com/",
      },
      {
        name: "Mux Video",
        url: "https://docs.mux.com/",
      },
      // {
      //   name: "",
      //   url: "",
      // },
    ],
    role: ["Sole Developer"],
    url: "https://mikemartinmedia.com",
    // gitHubRepo: "https://github.com/KLong75/mike-martin-media",
    gitHubRepo: "https://github.com/KLong75/mike-martin-media",
    npmUrl: undefined,
    repoPrivacyMessage:
      "Thank you for your interest in this project. Mike Martin Media is a client of my company Rhythm Code Studio. In order to respect their privacy, this repository is private. If you have any questions about how the site is built, please feel free to reach out. I'd love to tell you all about it.",
    images: {
      mobile: [
        "/images/mmm/mobile/home.jpg",
        "/images/mmm/mobile/drone.jpg",
        "/images/mmm/mobile/blog.jpg",
        "/images/mmm/mobile/contact.jpg",
        "/images/mmm/mobile/education.jpg",
        "/images/mmm/mobile/video-editing.jpg",
      ],
      desktop: [
        "/images/mmm/desktop/home.png",
        "/images/mmm/desktop/drone-logo.png",
        "/images/mmm/desktop/drone.png",
        "/images/mmm/desktop/our-work.png",
        "/images/mmm/desktop/blog-preview.png",
        "/images/mmm/desktop/blog-post.png",
        "/images/mmm/desktop/contact-form.png",
      ],
    },
    guestCredentials: undefined,
  },
  {
    title: "thelongemergency.net",
    type: "Band Website",
    description:
      "The Long Emergency is a rock band in St. Louis, Missouri. Their website features a gig calendar, music player, audio downloads, merch store, blog, and contact form. Fully responsive and accessible. Integrated with Vercel Analytics for monitoring site traffic. Built with Next.js and Tailwind CSS.",
    technologies: [
       { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "React", url: "https://react.dev" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "SQL", url: "https://www.w3schools.com/sql/" },
      { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
      { name: "EmailJS", url: "https://www.emailjs.com/docs/" },
      {
        name: "Google Search Console",
        url: "https://support.google.com/webmasters/answer/9128668",
      },
      { name: "HeroUI", url: "https://www.heroui.com/docs/" },
      { name: "Neon Postgres", url: "https://neon.tech/docs" },
      { name: "Vercel", url: "https://vercel.com/docs" },
      { name: "Vercel Analytics", url: "https://vercel.com/docs/analytics" },
    ],
    role: ["Sole Developer and Designer"],
    url: "https://thelongemergency.net/",
    gitHubRepo: "https://github.com/RhythmCodeStudio/the-long-emergency",
    npmUrl: undefined,
    images: {
      mobile: [
        "/images/the-long-emergency/mobile/home.jpg",
        "/images/the-long-emergency/mobile/music.jpg",
        "/images/the-long-emergency/mobile/music-2.jpg",
        "/images/the-long-emergency/mobile/music-player.jpg",
        "/images/the-long-emergency/mobile/lyrics.jpg",
        "/images/the-long-emergency/mobile/shows-future.jpg",
        "/images/the-long-emergency/mobile/shows-past.jpg",
        "/images/the-long-emergency/mobile/1-17-2025.jpg",
        "/images/the-long-emergency/mobile/contact.jpg",
      ],
      desktop: [
        "/images/the-long-emergency/desktop/home.png",
        "/images/the-long-emergency/desktop/music.png",
        "/images/the-long-emergency/desktop/lyrics.png",
        "/images/the-long-emergency/desktop/shows-future.png",
        "/images/the-long-emergency/desktop/shows-past.png",
        "/images/the-long-emergency/desktop/contact.png",
        "/images/the-long-emergency/desktop/shows-footer.png",
      ],
    },
    guestCredentials: undefined,
  },
  // {
  //   title: "WatchTV",
  //   type: "Full Stack Application",
  //   description:
  //     "Installable Progressive Web Application. WatchTV serves as a central hub for all of a user's subscription streaming accounts. Search for any TV show or movie and link to where it is available online to stream, rent, or buy. Multiple search methods enable users to find what they want to watch and where they can watch it. Users can search all sources or just the ones they are subscribed to. Save titles to a watchlist for later viewing. The watchlist can be filtered by source, type, and genre.",
  //   technologies: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node", url: "https://nodejs.org/en/docs/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
  //     {
  //       name: "Express",
  //       url: "https://expressjs.com/en/starter/installing.html",
  //     },
  //     {
  //       name: "MUI",
  //       url: "https://mui.com/material-ui/getting-started/overview/",
  //     },
  //     { name: "Apollo", url: "https://www.apollographql.com/docs/" },
  //     { name: "GraphQL", url: "https://graphql.org/learn/" },
  //     { name: "JSON web tokens", url: "https://jwt.io/introduction/" },
  //     { name: "bcrypt", url: "https://www.npmjs.com/package/bcrypt" },
  //     { name: "Mongoose", url: "https://mongoosejs.com/docs/guide.html" },
  //     {
  //       name: "PWA",
  //       url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
  //     },
  //     { name: "Swiperjs", url: "https://swiperjs.com/" },
  //     {
  //       name: "JavaScript",
  //       url: "https://developer.mozilla.org/docs/Web/JavaScript",
  //     },
  //     { name: "HTML", url: "https://developer.mozilla.org/docs/Web/HTML" },
  //     { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
  //   ],
  //   role: "Sole Developer and Designer",
  //   url: "https://streamhub-e4fc2af8fdfc.herokuapp.com/",
  //   gitHubRepo: "https://github.com/KLong75/stream-hub",
  //   npmUrl: undefined,
  //   guestCredentials: {
  //     email: "guest@email.com",
  //     password: "Guest#1",
  //   },
  //   images: {
  //     mobile: [
  //       "/images/watch-tv/mobile/home.jpg",
  //       "/images/watch-tv/mobile/login.jpg",
  //       "/images/watch-tv/mobile/homepage.jpg",
  //       "/images/watch-tv/mobile/home-star-wars.jpg",
  //       "/images/watch-tv/mobile/home-menu.jpg",
  //       "/images/watch-tv/mobile/rogue-one.jpg",
  //       "/images/watch-tv/mobile/mando.jpg",
  //       "/images/watch-tv/mobile/search-menu.jpg",
  //       "/images/watch-tv/mobile/settings.jpg",
  //       "/images/watch-tv/mobile/combo-search.jpg",
  //       // "/images/watch-tv/mobile/signup.jpg",
  //     ],
  //     desktop: [
  //       // "/images/watch-tv/desktop/feature.png",
  //       "/images/watch-tv/desktop/user-home.png",
  //       "/images/watch-tv/desktop/home.png",
  //       "/images/watch-tv/desktop/login.png",
  //       "/images/watch-tv/desktop/mando.png",
  //       "/images/watch-tv/desktop/rogue-one.png",
  //       "/images/watch-tv/desktop/diego.png",
  //       "/images/watch-tv/desktop/search.png",
  //       "/images/watch-tv/desktop/search-results.png",
  //       "/images/watch-tv/desktop/title-gallery.png",
  //     ],
  //   },
  // },
  {
    title: "Musicology",
    type: "Full Stack Application",
    description:
      "A full stack networking application for musicians. Users can sign up, create a profile describing their musical abilities and interests, make posts on the bulletin board, respond to posts made by other users, and connect with other musicians for creative and business purposes.",
    technologies: [
      { name: "React", url: "https://react.dev/" },
      { name: "Node", url: "https://nodejs.org/en/docs/" },
      { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
      {
        name: "Express",
        url: "https://expressjs.com/en/starter/installing.html",
      },
      {
        name: "MUI",
        url: "https://mui.com/material-ui/getting-started/overview/",
      },
      { name: "React Router", url: "https://reactrouter.com/en/main" },
      { name: "Apollo", url: "https://www.apollographql.com/docs/" },
      { name: "GraphQL", url: "https://graphql.org/learn/" },
      { name: "JSON web tokens", url: "https://jwt.io/introduction/" },
      { name: "bcrypt", url: "https://www.npmjs.com/package/bcrypt" },
      { name: "Mongoose", url: "https://mongoosejs.com/docs/guide.html" },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      { name: "HTML", url: "https://developer.mozilla.org/docs/Web/HTML" },
      { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
    ],
    role: ["Lead Developer", "Project Manager"],
    url: "https://musicology-umekev.herokuapp.com/",
    gitHubRepo: "https://github.com/KLong75/musician-networking-app",
    npmUrl: undefined,
    images: {
      mobile: [
        "/images/musicology/mobile/home.jpg",
        "/images/musicology/mobile/login.jpg",
      ],
      desktop: [
        // "/images/musicology/desktop/home.gif",
        // "/images/musicology/desktop/home.png",
        "/images/musicology/desktop/home2.png",
        "/images/musicology/desktop/login.png",
        "/images/musicology/desktop/polka-king.png",
        "/images/musicology/desktop/slash.png",
        "/images/musicology/desktop/signup.png",
      ],
    },
    guestCredentials: undefined,
  },
  // {
  //   title: "",
  //   description: "",
  //   technologies: [
  //   ],
  //   role: ["Developer"],
  //   url: "",
  //   gitHubRepo: "",
  //   images: {
  //   mobile: [
  //     "",
  //   ],
  //   desktop: [
  //     "",
  //   ],
  // },
  // },
];
