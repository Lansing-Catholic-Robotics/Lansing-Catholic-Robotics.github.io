export const siteConfig = {
  title: "Cougar Claw Robotics",
  description: "Lansing Catholic High School Robotics",
  githubRepo: "Lansing-Catholic-Robotics/Lansing-Catholic-Robotics.github.io",
  // Astro validates these public env vars in astro.config.mjs.
  site: import.meta.env.PUBLIC_SITE_URL,
  footerText: "Cougar Claw Robotics",

  // Used in SEOmeta for Twitter card and Open Graph
  seo: {
    twitterHandle: import.meta.env.PUBLIC_TWITTER_HANDLE,
    twitterSite: import.meta.env.PUBLIC_SITE_URL,
  },
};

// Feature flags examples
export const featureFlags = {
  enableImprint: true,
  enableDataprotection: true,
  showAttribution: true, // Show starter attribution in the footer if you want it
};

// Navigation menu items
export const nav = [
  {
    text: "Home",
    url: "/",
  },

  {
    text: "News",
    url: "/news",
  },

  {
    text: "Calendar",
    url: "/calendar",
  },

  {
    text: "Resources",
    url: "/resources",
  },

  {
    text: "Sponsors",
    url: "/sponsors",
  }

];
