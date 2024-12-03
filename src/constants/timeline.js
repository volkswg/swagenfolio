export const TIMELINE_TYPE = {
  ALL: "ALL",
  EXPERIENCE: "EXPERIENCE",
  ACHIEVEMENT: "ACHIEVEMENT",
  PROJECT: "PROJECT",
  EDUCATION: "EDUCATION",
};

export const experienceData = [
  {
    imgSrc: "/image/workExp/sunday_logo.jpg",
    year: "2022 - Current",
    position: "Software Engineer",
    type: TIMELINE_TYPE.EXPERIENCE,
    companyName: "SUNDAY TECHNOLOGIES COMPANY LIMITED",
    descriptionComp: (
      <ul>
        <li>
          <b>Lead Service Implementation:</b> Lead the migration of the
          authentication management service from an existing Java-based (Kotlin)
          implementation to a new service Javascript-based, ensuring seamless
          integration and compatibility
          <ul>
            <li>
              Collaborated closely with the Project Owner to define high-level
              requirements and establish project timelines
            </li>
            <li>
              Organized and delegated tasks among team members, ensuring
              efficient workflow.
            </li>
            <li>
              Conducted risk analysis to identify and mitigate potential
              challenges during the migration process.
            </li>
          </ul>
        </li>
        <li>
          <b>Initiated Service to Reduce Operation Time:</b> Designed and
          implemented a new service to automate specific workflows, eliminating
          time-consuming manual tasks and improving operational efficiency.
        </li>
      </ul>
    ),
  },
  {
    imgSrc: "/image/workExp/hgr_logo.jpg",
    year: "2022",
    position: "Full Stack Developer",
    type: TIMELINE_TYPE.EXPERIENCE,
    companyName: "HG ROBOTICS COMPANY LIMITED",
    descriptionComp: (
      <ul>
        <li>
          <b>Frontend Development (Web):</b> Implemented user interfaces using
          Vue.js.
        </li>
        <li>
          <b>Backend Development (API Server):</b> Developed APIs using the
          Sails.js framework (Node.js) with MySQL as the database.
          <ul>
            <li>
              Upgraded backend authorization from static, hardcoded rules to a
              user-configurable system utilizing JWT (JSON Web Token).
              <ul>
                <li>
                  Migrated hardcoded permissions to a database-driven
                  permissions mapping.
                </li>
                <li>
                  Integrated dynamic authorization and permissions into the
                  frontend using the CASL framework.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Database Optimization:</b> Migrated ORM framework from Sails.js
          Waterline to Sequelize for improved database management and
          flexibility.
        </li>
      </ul>
    ),
  },
  {
    imgSrc: "/image/workExp/readawrite_logo.jpg",
    year: "2019",
    position: "Full Stack Developer",
    type: TIMELINE_TYPE.EXPERIENCE,
    companyName: "MEB CORPORATION LTD.",
    descriptionComp: (
      <ul>
        <li>
          <b>Frontend Development (Web):</b> Built user interfaces using
          <b>HTML, CSS,</b> and
          <b>JavaScript</b>.
        </li>
        <li>
          <b>Backend Development (API Server):</b> Implemented server-side
          functionality using <b>PHP (Smarty), MySQL,</b> and <b>Node.js</b>
        </li>
        <li>
          <b>Server Optimization:</b> Reduced infrastructure costs and improved
          user experience by optimizing server performance.
          <ul>
            <li>
              Minimized query time by refactoring PHP scripts to batch process
              queries instead of iterating through loops.
            </li>
            <li>
              Monitored server CPU utilization and response times using AWS
              CloudWatch.
            </li>
            <li>
              Optimized server-side rendering by enhancing the caching system.
            </li>
            <li>
              Implemented lazy loading to load data only when needed, improving
              performance.
            </li>
          </ul>
        </li>
        <li>
          <b>Serverless Architecture:</b> Designed and deployed serverless
          services using <b>AWS Lambda</b> to run scheduled tasks (Cron jobs) at
          fixed intervals.
        </li>
      </ul>
    ),
  },
  {
    imgSrc: "/image/workExp/PICO_logo.png",
    year: "2018",
    position: "Internship",
    type: TIMELINE_TYPE.EXPERIENCE,
    companyName: "Pico (Thailand) Public Co., Ltd.",
  },
];

export const achievementData = [
  {
    imgSrc: "/image/achievementList/hackathon_logo.jpg",
    year: "2018",
    position: "3rd Runner-Up",
    type: TIMELINE_TYPE.ACHIEVEMENT,
    companyName: "Thailand Open Hackathron 2018",
  },
  {
    imgSrc: "/image/achievementList/ticta_logo.jpg",
    year: "2015",
    position: "1st Runner-Up",
    type: TIMELINE_TYPE.ACHIEVEMENT,
    companyName: "Thailand ICT Award 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2015_cover.jpg",
    year: "2015",
    position: "1st Runner-Up",
    type: TIMELINE_TYPE.ACHIEVEMENT,
    companyName: "National Software Contest 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2014_cover.jpg",
    year: "2014",
    position: "Honorable Mention Award",
    type: TIMELINE_TYPE.ACHIEVEMENT,
    companyName: "National Software Contest 2014",
  },
  {
    imgSrc: "/image/achievementList/mos2014_logo.jpg",
    year: "2014",
    position: "Bronze Medal",
    type: TIMELINE_TYPE.ACHIEVEMENT,
    companyName: "MOS Olympic (Excel 2010)",
  },
];

export const projectData = [
  {
    imgSrc: "/image/projectExp/BommCrypto-logo.jpeg",
    year: "2022",
    position: "BombCrypto Bot",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/puppeteer_autofill.jpg",
    year: "2022",
    position: "Google Form Autofill",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/sitinnovate_logo.png",
    year: "2021",
    position: "SIT Innovate Website",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "SIT Innovate co.ltd.",
  },
  {
    imgSrc: "/image/projectExp/thaiaupair_logo.PNG",
    year: "2021",
    position: "Thai Aupair Website",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "Thaiaupair.com",
  },
  {
    imgSrc: "/image/projectExp/eterno64_logo.PNG",
    year: "2020",
    position: "The Eterno 64 Website",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "TANGCHAIYAWONG DEVELOMENT CO.,LTD",
  },
  {
    imgSrc: "/image/projectExp/his_sim.jpg",
    year: "2019",
    position: "HIS Simulation",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "Computer Engineering (KMUTT)",
  },
  {
    imgSrc: "/image/projectExp/HappyTownLogo.jpg",
    year: "2015",
    position: "Happy Town",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "The Prince Royal's College",
  },
  {
    imgSrc: "/image/projectExp/mmDash_logo.jpg",
    year: "2015",
    position: "Monmon dash",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "ต่อกล้าให้เติบใหญ่ (Newseed) #2",
  },
  {
    imgSrc: "/image/projectExp/Monmon_logo.jpg",
    year: "2014",
    position: "Monmon: hiding the hanky",
    type: TIMELINE_TYPE.PROJECT,
    companyName: "The Prince Royal's College",
  },
];

export const educationData = [
  {
    imgSrc: "/image/education/kmutt_logo.png",
    year: "2015",
    position: "Computer Engineer",
    type: TIMELINE_TYPE.EDUCATION,
    companyName: "King Mongkut's University of Technology Thonburi",
  },
  {
    imgSrc: "/image/education/prc_logo.png",
    year: "2012",
    position: "Science - Math Student",
    type: TIMELINE_TYPE.EDUCATION,
    companyName: "The Prince Royal's College",
  },
];
