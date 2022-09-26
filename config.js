module.exports = {
  siteTitle: 'Mifta Sintaha', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#d63354',
  manifestThemeColor: '#d63354',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/icon.jpeg',
  // pathPrefix: `/msintaha.github.io`, // This path is subpath of your hosting https://domain/portfolio
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
  address: 'Vancouver, British Columbia, Canada',
  newscredExperience: [
    'Experienced in working with Agile/Scrum methodology',
    'Designed and built various features for NewsCred/Welcome\'s SaaS platform',
    'Used microservice architecture to split out software features',
    'Migrated DB models by double-writing data and backpoping via scripts',
    'Took leadership roles and ownership of microservices and it\'s maintenance as a core contributer',
    'Wrote tech specs for feature architecture with flow diagrams, risk analysis, goals and non-goals; presented them in architecture meetings',
    'Integrated 3rd party APIs like SEMRush and cached requests to overcome rate limits',
    'Worked with completed grids in the UI to create resource management system for marketers',
    'Designed and implemented an article recommender system using ElasticSearch MLT by taking a user\'s journey to compare with regular tags and categories grouping algorithm and did A/B testing to compare click through rates. Set up CDNs for serving Javascript for Recommended Articles Widget',
    'Collected usage analytics of new features and wrote SQL queries for visualizing data on feature usage in Periscope',
    'Designed and implemented a dashboard integrated with various in-house microservice APIs to automate repetitive client on-boarding tasks with a UI for support team. Dockerized build and deploy',
    'Created a chat application for real-time conversations within the platform using sockets. Added content reference tagging within the conversation window using ‘@’ and ‘#’.',
    'Created a Content Scoring system using Yoast’s SEO analysis and SEMrush’s keywords data mining to score content based on most used words in Google’s top 20 search results',
    'Built a feature for making ad-hoc work requests with custom form builder for taking in inputs from requesters with advanced UI drag/drop and validations. Used ReactJS and Flask for the backend using design patterns like Factory Pattern and Strategy Pattern and maintained SOLID principles like SRP and Interface Segregation principle',
    'Created a Design Library with NewsCred’s brand related design using ReactJS and created both representational and smart components for effective code reuse. Introduced design patterns and code conventions for said design library. Showcased the design on a DSM (Design system manager) like Storybook with documentation',
    'Improved Feature Performance by analyzing Google Stackdriver to identify N+1 API calls and optimized those services. Monitored using NewRelic dashboard',
    'Created a Kanban board that makes multiple network calls to change status. Implemented open source state machine (DFA) libraries which led to greater code manageability and readability due to reduced number of code branches/conditionals',
    'Added Testim test suites by capturing journeys of features to prevent regression',
    'Created an inline commenting tool within the text editor (TinyMCE) and in read mode. Added user mentions and maintained data consistency to avoid race conditions.',
    'Built a resource planner module with AG-grid to show a calendar view and enable complex drag/drop operations to show time allocation. Fetched data from microservice written in Flask which supports the logic for calculating the resources based on days and hours.',
  ],
  youtubeExperience: [
    'Created video tutorials on theoretical topics of Computer Science e.g. Algorithms, Compiler Design, Automata & Computability, Database Systems, Computer Architecture, Graphics, Networking Systems, Java programming simulations, Operating Systems, DC Circuits',
    'Created tutorials on Javascript Web frameworks e.g. MEAN stack, React basics'
  ]
};
