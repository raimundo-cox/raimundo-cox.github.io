// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Research - Works in Progress",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "For a PDF version, click the &quot;PDF&quot; button to the right. However, the web version will be the most up to date.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "This page is a work in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-i-presented-a-paper-on-francisco-suarez-at-the-university-of-michigan-rackham-early-modern-philosophy-workshop",
          title: 'I presented a paper on Francisco Suarez at the University of Michigan Rackham...',
          description: "",
          section: "News",},{id: "news-i-presented-a-paper-on-francisco-suarez-at-the-institute-for-macintyrean-enquiry-s-annual-conference-hosted-by-the-university-of-pennsylvania-the-theme-was-intellectual-traditions-in-conflict",
          title: 'I presented a paper on Francisco Suarez at the Institute for MacIntyrean Enquiry’s...',
          description: "",
          section: "News",},{id: "news-i-commented-on-a-paper-by-godehard-brüntrup-at-the-philosophical-legacy-of-robert-merrihew-adams-at-princeton-theological-seminary",
          title: 'I commented on a paper by Godehard Brüntrup at “The Philosophical Legacy of...',
          description: "",
          section: "News",},{id: "news-i-attended-the-spring-2026-thomistic-circles-conference-what-is-a-form-and-how-do-we-understand-it-in-washington-d-c",
          title: 'I attended the Spring 2026 Thomistic Circles Conference: “What is a Form and...',
          description: "",
          section: "News",},{id: "news-upcoming-i-was-accepted-into-nustep-2026-i-will-present-a-paper-in-june-2026-on-kant-s-political-philosophy",
          title: '(Upcoming) I was accepted into NUSTEP 2026. I will present a paper in...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-philosophy-of-francisco-suarez-at-the-university-of-gröningen-in-the-netherlands",
          title: 'I presented at “The Philosophy of Francisco Suarez” at the University of Gröningen...',
          description: "",
          section: "News",},{id: "news-i-will-be-based-in-brooklyn-ny-this-summer-from-mid-may-until-the-end-of-august-if-you-are-in-the-nyc-area-and-would-like-to-connect-please-feel-free-to-reach-out",
          title: 'I will be based in Brooklyn, NY this summer, from mid-May until the...',
          description: "",
          section: "News",},{id: "news-upcoming-i-was-accepted-into-the-twenty-third-annual-atlantic-canada-seminar-in-early-modern-philosophy-i-will-be-presenting-my-draft-paper-kant-s-theory-of-moral-intelligibility-in-july-2026",
          title: '(Upcoming) I was accepted into the Twenty-Third Annual Atlantic Canada Seminar in Early...',
          description: "",
          section: "News",},{id: "projects-kant-39-s-reform-of-metaphysics",
          title: 'Kant&amp;#39;s Reform of Metaphysics',
          description: "Kant&amp;#39;s philosophical project as a unified whole",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-late-scholasticism-amp-amp-early-modern-philosophy",
          title: 'Late Scholasticism &amp;amp;amp; Early Modern Philosophy',
          description: "The origins of modern philosophy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-kant-39-s-practical-metaphysics",
          title: 'Kant&amp;#39;s Practical Metaphysics',
          description: "Moral philosophy in Kant&#39;s system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
