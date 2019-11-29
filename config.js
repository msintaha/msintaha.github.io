module.exports = {
  siteTitle: 'Mifta Sintaha', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#d63354',
  manifestThemeColor: '#d63354',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/icon.jpeg',
  pathPrefix: `/msintaha.github.io`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Mifta',
  lastName: 'Sintaha',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/msintaha',
    },
    {
      icon: 'fa-youtube',
      name: 'YouTube',
      url: 'https://www.youtube.com/c/MiftaSintahaCS',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mifta-sintaha-574319b1/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/MiftaSintaha',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/mifta.sintaha.7',
    },
  ],
  email: 'msintaha94@gmail.com',
  address: 'Dhaka, Bangladesh',
  newscredExperience: [
    'Designed and built new features for NewsCred\'s Content Marketing Software',
    'Used microservice architecture to split out software features',
    'Migrated DB models by double-writing data and backpoping via scripts',
    'Took leadership roles and ownership of services and it\'s maintenance',
    'Wrote tech specs for feature architecture, flow diagrams and presented them in architecture meetings',
    '3rd party API integration and caching to overcome rate limits',
    'Designed and implemented an article recommender system using ElasticSearch MLT by taking a user\'s journey to compare with regular tags and categories grouping algorithm and did A/B testing to compare click through rates. Set up CDNs for serving Javascript for Recommended Articles Widget',
    'Collected usage analytics and Wrote SQL queries for visualizing data on feature usage in Periscope',
    'Designed and implemented a dashboard integrated with various in-house microservice APIs to automate repetitive client on-boarding tasks with a UI for support team. Dockerized build and deploy',
    'Created a Content Scoring system from scratch using Yoast’s SEO analysis and SEMrush’s keywords data mining to score content based on most used words in Google’s top 20 search results',
    'Built a feature for making ad-hoc work requests with custom form builder for taking in inputs from requesters. Used ReactJS and Flask for the backend using design patterns like Factory Pattern and Strategy Pattern and maintained SOLID principles like SRP and Interface Segregation principle',
    'Created a Design Library with NewsCred’s brand related design using ReactJS and created both representational and smart components for effective code reuse. Introduced design patterns and code conventions for said design library. Showcased the design on a DSM (Design system manager) like Storybook with documentation',
    'Improved Feature Performance by analyzing Google Stackdriver to identify N+1 API calls and optimized those services. Monitored using NewRelic dashboard',
    'Added Testim tests by capturing journeys of features and validated regression tests'
  ],
  youtubeExperience: [
    'Created video tutorials on theoretical topics of Computer Science e.g. Algorithms, Compiler Design, Automata & Computability, Database Systems, Computer Architecture, Graphics, Networking Systems, Java programming simulations, Operating Systems, DC Circuits',
    'Created tutorials on Javascript Web frameworks e.g. MEAN stack'
  ]
};
