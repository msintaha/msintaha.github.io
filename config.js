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
    'Designed and implemented a "Support dashboard" integrated with various in-house microservice APIs to automate repetitive client on-boarding tasks with a UI for support team. Dockerized the build and deployment of this service and integrated it into CI/CD pipeline.',
    'Integrated third party APIs for showing SEO data and Content Scoring with a caching layer to avoid API rate limits.',
    'Lowered costs ($3.59 per month) and increased user click-through-rate by 30% through a serverless Recommended Articles Widget. This is an article recommender system using ElasticSearch MLT by taking a user\'s journey to compare with regular tags and categories grouping algorithm and did A/B testing to compare click through rates. Set up a CDN for serving a script (Javascript) for Recommended Articles Widget used in WordPress sites and used aggregation service like AWS Athena to query user activity. Used design patterns to implement the service.',
    'Tracked usage activity to understand latency and DAU by creating Periscope Dashboards for visualizing data.',
    'Took ownership of services and its maintenance, wrote tech specs and presented in company-wide architecture meetings.',
    'Created a Content Scoring system (frontend and backend) from scratch using Yoast’s SEO analysis and SEMrush’s keywords data mining to score content based on most used words in Google’s top 20 search results.',
    'Built a Design Library with the company’s brand design using React and created both representational and smart components for effective code reuse. Introduced css design patterns and code conventions for said design library. Showcased the design on a DSM (Design system manager) like Storybook with specs.',
    'Built a resource planner module with AG-grid to show a calendar view and enable complex drag/drop operations to show time allocation. Fetched data from microservice written in Flask which supports the logic for calculating the resources based on days and hours.',
    'Created a Kanban board that makes multiple network calls to change status. Used a state machine library (DFA) to avoid multiple branching for calling the APIs and improve code readability for future extension.',
    'Created a form builder that allows customizable fields (backend and frontend) with advanced UI drag/drop and form validations to submit work requests from the work request module. This feature increased the DAU by 40%.',
    'Created the first chat application within the platform for real-time conversations using websockets. Added content reference tagging within the conversation window using ‘@’ and ‘#’.',
    'Created an inline commenting tool (threaded comments) similar to Confluence.',
    'Improved and consistently met quarterly feature Performance SLA by analyzing Google Stackdriver to identify N+1 API calls and optimized those services.'
  ],
  youtubeExperience: [
    'Created video tutorials on theoretical topics of Computer Science e.g. Algorithms, Compiler Design, Automata & Computability, Database Systems, Computer Architecture, Graphics, Networking Systems, Java programming simulations, Operating Systems, DC Circuits',
    'Created tutorials on Javascript Web frameworks e.g. MEAN stack, React basics'
  ]
};
