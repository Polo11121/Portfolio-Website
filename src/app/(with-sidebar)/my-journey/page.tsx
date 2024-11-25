import { Section } from "@/components/section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNpm,
  FaNodeJs,
  FaReact,
  FaYarn,
  FaAmazon,
  FaDiscord,
  FaSlack,
} from "react-icons/fa";
import { RiTreasureMapLine } from "react-icons/ri";
import {
  SiAxios,
  SiBem,
  SiCypress,
  SiCssmodules,
  SiEslint,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPrettier,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
  SiLinkedin,
  SiTestinglibrary,
  SiWebpack,
  SiUdemy,
  SiGitlab,
  SiJira,
  SiTwitch,
} from "react-icons/si";

const MyJourneyPage = () => (
  <Section title="My journey" Icon={RiTreasureMapLine}>
    <div className="flex flex-col justify-start">
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        05.2021
      </h3>
      <ol className="flex flex-col gap-5">
        <li className="flex flex-row ">
          <p className="self-end font-bold">- I started learning</p>
          <div className="flex flex-row items-center gap-1">
            <Tooltip>
              <TooltipTrigger>
                <FaHtml5 color="#E34F26" size={32} />
              </TooltipTrigger>
              <TooltipContent>HTML</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiJavascript color="#F7DF1E" size={32} />
              </TooltipTrigger>
              <TooltipContent>JavaScript</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTypescript color="#3178C6" size={32} />
              </TooltipTrigger>
              <TooltipContent>TypeScript</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaCss3Alt color="#1572B6" size={32} />
              </TooltipTrigger>
              <TooltipContent>CSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaReact color="#61DAFB" size={32} />
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
          </div>
        </li>
        <li className="flex items-end font-bold flex-wrap">
          <p className="flex items-end gap-1 flex-wrap">
            - I completed{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700 whitespace-pre-wrap"
              href="https://www.udemy.com/course/the-ultimate-react-course/"
            >
              The Ultimate React Course: React, Redux & More on
            </a>
            <Tooltip>
              <TooltipTrigger>
                <SiUdemy color="#A435F0" size={32} />
              </TooltipTrigger>
              <TooltipContent>Udemy</TooltipContent>
            </Tooltip>
          </p>
          <p className="self-end">
            (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
              href="https://github.com/Polo11121/The-Ultimate-React-Course-2024-Udemy-Course"
            >
              Repo 1
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
              href="https://github.com/Polo11121/The-Ultimate-React-Course-2024-The-Wild-Oasis-App"
            >
              Repo 2
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
              href="https://github.com/Polo11121/The-Ultimate-React-Course-2024-Fast-Pizza-App"
            >
              Repo 3
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
              href="https://the-ultimate-react-course-2024-the-wild-oasis-app.vercel.app/login"
            >
              Application 2
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
              href="https://the-ultimate-react-course-2024-the-wild-oasis-app.vercel.app/login"
            >
              Application 3
            </a>
            )
          </p>
        </li>
        <li className="h-8 flex items-center">
          <p className="font-bold">
            - I created a simple memory game (
            <a
              href="https://github.com/Polo11121/React-Memory-Game-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo
            </a>{" "}
            |{" "}
            <a
              href="https://memory-game-c0e14.web.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application
            </a>
            )
          </p>
        </li>
        <li className="h-8 flex items-center">
          <p className="font-bold">
            - I created a live chat application (
            <a
              href="https://github.com/Polo11121/React-Live-Chat-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo
            </a>{" "}
            |{" "}
            <a
              href="https://live-chat-app-6ea25.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application
            </a>
            )
          </p>
        </li>
        <li>
          <p className="flex items-end font-bold gap-1">
            - I created a clone of{" "}
            <Tooltip>
              <TooltipTrigger>
                <FaAmazon color="#FF9900" size={32} />
              </TooltipTrigger>
              <TooltipContent>Amazon</TooltipContent>
            </Tooltip>{" "}
            (
            <a
              href="https://github.com/Polo11121/React-Amazon-Clone-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo
            </a>{" "}
            |{" "}
            <a
              href="https://react-amazon-clone-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application
            </a>
            )
          </p>
        </li>
      </ol>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        07.2021
      </h3>
      <ol className="flex flex-col gap-5 flex-wrap">
        <li>
          <p className="flex items-end font-bold flex-wrap">
            - I started an internship as a Frontend Developer, on which we
            created a clone of{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiLinkedin color="#0A66C2" size={32} className="mx-1" />
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>{" "}
            (
            <a
              href="https://github.com/Polo11121/React-Linkedin-Clone-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo
            </a>{" "}
            |{" "}
            <a
              href="https://billennium-frontend-interns.github.io/linkedin_clone_project/#/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application
            </a>
            )
          </p>
        </li>
        <li className="flex gap-1 flex-wrap">
          <p className="self-end font-bold flex-wrap">
            - During the internship I learned a lot of new technologies:
          </p>
          <div className="flex flex-wrap gap-1">
            <Tooltip>
              <TooltipTrigger>
                <SiReactquery color="#FF4154" size={32} />
              </TooltipTrigger>
              <TooltipContent>React Query</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiReactrouter color="#CA4245" size={32} />
              </TooltipTrigger>
              <TooltipContent>React Router</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaGitAlt color="#F34F29" size={32} />
              </TooltipTrigger>
              <TooltipContent>Git</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaGithub size={32} />
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiCypress size={32} />
              </TooltipTrigger>
              <TooltipContent>Cypress</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiJest color="#C21325" size={32} />
              </TooltipTrigger>
              <TooltipContent>Jest</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTestinglibrary color="#E33332" size={32} />
              </TooltipTrigger>
              <TooltipContent>Testing Library</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiFirebase color="#FFCA28" size={32} />
              </TooltipTrigger>
              <TooltipContent>Firebase</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaNpm color="#CB3837" size={32} />
              </TooltipTrigger>
              <TooltipContent>npm</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaYarn color="#2C8EBB" size={32} />
              </TooltipTrigger>
              <TooltipContent>yarn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiSass color="#CC6699" size={32} />
              </TooltipTrigger>
              <TooltipContent>Sass</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiPrettier color="#F7B93E" size={32} />
              </TooltipTrigger>
              <TooltipContent>Prettier</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiEslint color="#4B32C3" size={32} />
              </TooltipTrigger>
              <TooltipContent>ESLint</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiMui color="#007FFF" size={32} />
              </TooltipTrigger>
              <TooltipContent>MUI</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiAxios color="#5A29E4" size={32} />
              </TooltipTrigger>
              <TooltipContent>Axios</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiWebpack color="#8DD6F9" size={32} />
              </TooltipTrigger>
              <TooltipContent>Webpack</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiBem color="#000000" size={32} />
              </TooltipTrigger>
              <TooltipContent>BEM</TooltipContent>
            </Tooltip>
          </div>
        </li>
      </ol>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        09.2021
      </h3>
      <ol className="flex flex-col gap-5">
        <li className="h-8 flex items-center">
          <p className="font-bold">
            - After the internship, I was hired as a Frontend Junior Developer.
          </p>
        </li>
        <li className="flex gap-1 flex-wrap">
          <p className="self-end font-bold">
            - I joined the project, where I learned how to work in a team and
            learned a lot of new technologies:
          </p>
          <div className="flex flex-row items-center gap-1">
            <Tooltip>
              <TooltipTrigger>
                <SiRedux color="#764ABC" size={32} />
              </TooltipTrigger>
              <TooltipContent>Redux</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiGitlab color="#FC6D26" size={32} />
              </TooltipTrigger>
              <TooltipContent>GitLab</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiJira color="#0052CC" size={32} />
              </TooltipTrigger>
              <TooltipContent>Jira</TooltipContent>
            </Tooltip>
          </div>
        </li>
      </ol>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        2021 - 2023
      </h3>
      <ol className="flex flex-col gap-5">
        <li className="flex items-end gap-1 flex-wrap">
          <p className="self-end font-bold">
            - I still work in the same company, but I try to learn new
            technologies all the time:
          </p>
          <div className="flex flex-row items-center gap-1">
            <Tooltip>
              <TooltipTrigger>
                <SiCssmodules size={32} color="#0078D4" /> {/* CSS Modules */}
              </TooltipTrigger>
              <TooltipContent>CSS Modules</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaCss3Alt size={32} color="#06B6D4" /> {/* Tailwind CSS */}
              </TooltipTrigger>
              <TooltipContent>Tailwind CSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiStyledcomponents size={32} color="#DB7093" />{" "}
              </TooltipTrigger>
              <TooltipContent>Styled Components</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiVite size={32} color="#646CFF" /> {/* Vite */}
              </TooltipTrigger>
              <TooltipContent>Vite</TooltipContent>
            </Tooltip>
          </div>
        </li>
        <li>
          <p className="flex items-end gap- font-bold gap-1 flex-wrap">
            - I had a little adventure with{" "}
            <Tooltip>
              <TooltipTrigger>
                <FaReact size={32} color="#61DAFB" />
              </TooltipTrigger>
              <TooltipContent>React Native</TooltipContent>
            </Tooltip>
            , I even finished a course on Udemy{" "}
            <a
              href="https://www.udemy.com/course/react-native-the-practical-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              React Native - The Practical Guide
            </a>{" "}
            on{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiUdemy size={32} color="#A435F0" /> {/* Udemy */}
              </TooltipTrigger>
              <TooltipContent>Udemy</TooltipContent>
            </Tooltip>{" "}
            (
            <a
              href="https://github.com/Polo11121/React-Native-Basic-Apps"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 1
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/React-Native-Delivery-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 2
            </a>
            )
          </p>
        </li>
        <li className="flex flex-col gap-1 min-h-16 flex-wrap">
          <p className="self-end font-bold">
            -For the needs of engineering work, I created a fully responsive{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiMongodb color="#47A248" size={32} />
              </TooltipTrigger>
              <TooltipContent>MongoDB</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiExpress size={32} />
              </TooltipTrigger>
              <TooltipContent>Express</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaReact color="#61DAFB" size={32} />
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaNodeJs color="#339933" size={32} className="mr-1" />
              </TooltipTrigger>
              <TooltipContent>Node.js</TooltipContent>
            </Tooltip>
            fullstack application with websockets and automated tests in{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiCypress size={32} />
              </TooltipTrigger>
              <TooltipContent>Cypress</TooltipContent>
            </Tooltip>{" "}
            (
            <a
              href="https://github.com/Polo11121/React-Social-Networking-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Frontend
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/Nodejs-Social-Networking-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Backend
            </a>{" "}
            |{" "}
            <a
              href="https://date-app-praca-inzynierska.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application
            </a>
            )
          </p>
        </li>
        <li>
          <p className="font-bold">
            - I still like to code in my free time, preferably in the evenings,
            listening to some cozy music.
          </p>
        </li>
      </ol>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        2023 - 2024
      </h3>
      <ol className="flex flex-col gap-5">
        <li>
          <p className="flex items-end font-bold gap-1 flex-wrap">
            - I still work in the same company, but for a long time I feel like
            I&apos;m not developing there, luckily I recently discovered{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={32} />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>{" "}
            and I immediately liked it.
          </p>
        </li>
        <li>
          <p className="font-bold">
            -I have completed several courses such as{" "}
            <a
              href="https://www.udemy.com/course/nextjs-react-the-complete-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Next.js 14 & React - The Complete Guide
            </a>{" "}
            and{" "}
            <a
              href="https://www.udemy.com/course/next-js-the-complete-developers-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Next JS: The Complete Developer&apos;s Guide
            </a>{" "}
            (
            <a
              href="https://github.com/Polo11121/Nextjs-course"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 1 with applications
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/Next-JS-The-Complete-Developers-Guide-Udemy-Course"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 2
            </a>
            )
          </p>
        </li>
        <li>
          <p className="font-bold">
            - I have completed course{" "}
            <a
              href="https://bytegrad.com/courses/professional-react-nextjs"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Professional React & Next.js
            </a>{" "}
            (
            <a
              href="https://github.com/Polo11121/Next.js-Pet-Soft-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 1 with application
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/Next.js-Evento-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 2 with application
            </a>
            )
          </p>
        </li>
        <li>
          <p className="flex items-end gap-1 font-bold flex-wrap">
            - Using{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={32} />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
            , I also created clones of various popular Applications like{" "}
            <Tooltip>
              <TooltipTrigger>
                <FaDiscord color="#7289DA" size={32} />
              </TooltipTrigger>
              <TooltipContent>Discord</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTwitch color="#9146FF" size={32} />
              </TooltipTrigger>
              <TooltipContent>Twitch</TooltipContent>
            </Tooltip>{" "}
            (
            <a
              href="https://github.com/Polo11121/Next.js-Discord-Clone-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 1
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/Next.js-Twitch-Clone-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Repo 2
            </a>{" "}
            |{" "}
            <a
              href="https://next-js-discord-clone-app.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application 1
            </a>{" "}
            |{" "}
            <a
              href="https://nextjs14-twitch-clone-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Application 2
            </a>
            )
          </p>
        </li>
      </ol>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
        2025 - Now
      </h3>
      <ol className="flex flex-col gap-5">
        <li>
          <p className="font-bold">
            - It&apos;s already 2024, and I am still working in the same company
            as a Frontend Developer.
          </p>
        </li>
        <li>
          <p className="font-bold">
            - I have been looking for a new opportunity to grow professionally,
            but so far, I haven&apos;t found the right fit.
          </p>
        </li>
        <li className="flex gap-1 items-end flex-wrap">
          <p className="flex gap-1 items-end font-bold flex-wrap">
            - In the meantime, I created several applications, mostly using{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={32} />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
          </p>
          <div>
            (
            <a
              href="https://github.com/Polo11121/Next.js-Pet-Soft-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Pet Soft App
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/React-Wordle-Game"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Wordle Game
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Polo11121/Next.js-Cobracase-App"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Cobracase App
            </a>
            )
          </div>
        </li>
        <li>
          <p className="font-bold">
            - Sometimes, I don&apos;t finish these projects because I lack the
            motivation or time to work on them.
          </p>
        </li>
        <li>
          <p className="font-bold">
            - I would love to work on something new commercially and find a
            workplace where I can grow further.
          </p>
        </li>
        <li>
          <p className="font-bold">
            - Currently, in my free time, I continue working on my skills and
            experiment with new ideas to stay engaged in programming.
          </p>
        </li>
        <li>
          <p className="font-bold flex items-end gap-1 flex-wrap">
            - One of the projects I am currently working on is a{" "}
            <Tooltip>
              <TooltipTrigger>
                <FaSlack color="#4A154B" size={32} />
              </TooltipTrigger>
              <TooltipContent>Slack Clone</TooltipContent>
            </Tooltip>
            . You can find the repository{" "}
            <a
              href="https://github.com/Polo11121/Next.js-Slack-Clone"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              here
            </a>
            .
          </p>
        </li>
      </ol>
    </div>
  </Section>
);

export default MyJourneyPage;
