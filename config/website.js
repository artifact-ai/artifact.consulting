const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'artifact consulting', // Navigation and Site Title
  siteTitleAlt: 'Artifact Consulting', // Alternative Site title for SEO
  siteUrl: 'https://artifact.consulting', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Consulting in the field of artificial intelligence, specializing in computer vision and deep reinforcement learning.',

  userTwitter: '@artifactai', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors.grey,
  backgroundColor: tailwind.colors.light,
};
