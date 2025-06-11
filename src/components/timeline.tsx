"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaNpm,
  FaYarn,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCssmodules,
  SiJavascript,
  SiLinkedin,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiGitlab,
  SiJira,
  SiReactquery,
  SiReactrouter,
  SiUdemy,
  SiCypress,
  SiJest,
  SiTestinglibrary,
  SiFirebase,
  SiSass,
  SiPrettier,
  SiEslint,
  SiMui,
  SiAxios,
  SiWebpack,
  SiBem,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export const Timeline = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useTranslation();

  const timelineStyles = {
    contentStyle: {
      background: isDark ? "rgb(33, 33, 33)" : "rgb(249, 250, 251)",
      color: isDark ? "#fff" : "#1f2937",
      boxShadow: isDark ? "0 3px 0 #1a1a1a" : "0 3px 0 #e5e7eb",
      border: isDark ? "none" : "1px solid #e5e7eb",
      borderRadius: "8px",
    },
    contentArrowStyle: {
      borderRight: isDark
        ? "7px solid rgb(33, 33, 33)"
        : "7px solid rgb(249, 250, 251)",
    },
    iconStyle: {
      background: isDark ? "rgb(33, 33, 33)" : "rgb(249, 250, 251)",
      color: isDark ? "#fff" : "#1f2937",
      boxShadow: isDark ? "0 0 0 4px #1a1a1a" : "0 0 0 4px #e5e7eb",
      border: isDark ? "none" : "1px solid #e5e7eb",
    },
  };

  return (
    <>
      <style jsx global>{`
        .vertical-timeline::before {
          background: ${isDark ? "#1a1a1a" : "#e5e7eb"} !important;
        }
        .vertical-timeline-element-content {
          box-shadow: ${isDark
            ? "0 3px 0 #1a1a1a"
            : "0 3px 0 #e5e7eb"} !important;
        }
        .vertical-timeline-element-icon {
          box-shadow: ${isDark
            ? "0 0 0 4px #1a1a1a"
            : "0 0 0 4px #e5e7eb"} !important;
        }
      `}</style>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="05.2021"
          iconStyle={timelineStyles.iconStyle}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.2019-2020.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <FaHtml5 color="#E34F26" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>HTML</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiJavascript color="#F7DF1E" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>JavaScript</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTypescript color="#3178C6" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>TypeScript</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaCss3Alt color="#1572B6" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>CSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaReact color="#61DAFB" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.2019-2020.description")}
          </p>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.2019-2020.completed")}{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
              href="https://www.udemy.com/course/the-ultimate-react-course/"
            >
              The Ultimate React Course: React, Redux & More
            </a>{" "}
            {t("journey.timeline.2019-2020.on")}{" "}
            <Tooltip>
              <TooltipTrigger>
                <SiUdemy color="#A435F0" size={24} className="inline" />
              </TooltipTrigger>
              <TooltipContent>Udemy</TooltipContent>
            </Tooltip>
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.2019-2020.createdProjects")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                {t("journey.timeline.2019-2020.memoryGame")} (
                <a
                  href="https://github.com/Polo11121/React-Memory-Game-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")}
                </a>{" "}
                |{" "}
                <a
                  href="https://memory-game-c0e14.web.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.application")}
                </a>
                )
              </li>
              <li>
                {t("journey.timeline.2019-2020.liveChat")} (
                <a
                  href="https://github.com/Polo11121/React-Live-Chat-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")}
                </a>{" "}
                |{" "}
                <a
                  href="https://live-chat-app-6ea25.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.application")}
                </a>
                )
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="07.2021"
          iconStyle={timelineStyles.iconStyle}
          icon={<SiLinkedin />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.internship.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <SiReactquery color="#FF4154" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>React Query</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiReactrouter
                  color="#CA4245"
                  size={28}
                  className="sm:size-8"
                />
              </TooltipTrigger>
              <TooltipContent>React Router</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaGitAlt color="#F34F29" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Git</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.internship.description")}
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.internship.createdProject")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                LinkedIn Clone (
                <a
                  href="https://github.com/Polo11121/React-Linkedin-Clone-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")}
                </a>{" "}
                |{" "}
                <a
                  href="https://billennium-frontend-interns.github.io/linkedin_clone_project/#/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.application")}
                </a>
                )
              </li>
            </ul>
          </div>
          <div className="mt-4 text-sm sm:text-base">
            <p className="mb-2">
              {t("journey.timeline.internship.learnedTechnologies")}
            </p>
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <SiCypress size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Cypress</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiJest color="#C21325" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Jest</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiTestinglibrary
                    color="#E33332"
                    size={28}
                    className="sm:size-8"
                  />
                </TooltipTrigger>
                <TooltipContent>Testing Library</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiFirebase color="#FFCA28" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Firebase</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <FaNpm color="#CB3837" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>npm</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <FaYarn color="#2C8EBB" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>yarn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiSass color="#CC6699" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Sass</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiPrettier color="#F7B93E" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Prettier</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiEslint color="#4B32C3" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>ESLint</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiMui color="#007FFF" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>MUI</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiAxios color="#5A29E4" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Axios</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiWebpack color="#8DD6F9" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>Webpack</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <SiBem color="#000000" size={28} className="sm:size-8" />
                </TooltipTrigger>
                <TooltipContent>BEM</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="09.2021"
          iconStyle={timelineStyles.iconStyle}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.junior.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <SiRedux color="#764ABC" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Redux</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiGitlab color="#FC6D26" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>GitLab</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiJira color="#0052CC" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Jira</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.junior.description")}
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.junior.responsibilities")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {(
                t("journey.timeline.junior.achievements", {
                  returnObjects: true,
                }) as string[]
              ).map((achievement: string, index: number) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="2021 - 2023"
          iconStyle={timelineStyles.iconStyle}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.growth.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <SiCssmodules size={28} color="#0078D4" className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>CSS Modules</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaCss3Alt size={28} color="#06B6D4" className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Tailwind CSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiStyledcomponents
                  size={28}
                  color="#DB7093"
                  className="sm:size-8"
                />
              </TooltipTrigger>
              <TooltipContent>Styled Components</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.growth.description")}
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.growth.achievements")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                {t("journey.timeline.growth.explored")}{" "}
                <a
                  href="https://www.udemy.com/course/react-native-the-practical-guide"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  React Native - The Practical Guide
                </a>{" "}
                {t("journey.timeline.2019-2020.on")}{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <SiUdemy color="#A435F0" size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>Udemy</TooltipContent>
                </Tooltip>
              </li>
              <li>
                {t("journey.timeline.growth.created")}{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <SiMongodb color="#47A248" size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>MongoDB</TooltipContent>
                </Tooltip>
                ,{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <SiExpress size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>Express</TooltipContent>
                </Tooltip>
                ,{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <FaReact color="#61DAFB" size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>React</TooltipContent>
                </Tooltip>
                , {t("journey.timeline.growth.and")}{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <FaNodeJs color="#339933" size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>Node.js</TooltipContent>
                </Tooltip>
              </li>
              <li>
                {t("journey.timeline.growth.developed")}{" "}
                <Tooltip>
                  <TooltipTrigger>
                    <SiCypress size={24} className="inline" />
                  </TooltipTrigger>
                  <TooltipContent>Cypress</TooltipContent>
                </Tooltip>{" "}
                (
                <a
                  href="https://github.com/Polo11121/React-Social-Networking-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.growth.frontend")}
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Polo11121/Nodejs-Social-Networking-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.growth.backend")}
                </a>{" "}
                |{" "}
                <a
                  href="https://date-app-praca-inzynierska.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.application")}
                </a>
                )
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="2023 - 2024"
          iconStyle={timelineStyles.iconStyle}
          icon={<SiNextdotjs />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.2023-2024.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.2023-2024.description")}
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.2023-2024.completedCourses")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  href="https://www.udemy.com/course/nextjs-react-the-complete-guide"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  Next.js 14 & React - The Complete Guide
                </a>{" "}
                {t("journey.timeline.growth.and")}{" "}
                <a
                  href="https://www.udemy.com/course/next-js-the-complete-developers-guide"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  Next JS: The Complete Developer&apos;s Guide
                </a>{" "}
                (
                <a
                  href="https://github.com/Polo11121/Nextjs-course"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")} 1
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Polo11121/Next-JS-The-Complete-Developers-Guide-Udemy-Course"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")} 2
                </a>
                )
              </li>
              <li>
                <a
                  href="https://bytegrad.com/courses/professional-react-nextjs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  Professional React & Next.js
                </a>{" "}
                (
                <a
                  href="https://github.com/Polo11121/Next.js-Pet-Soft-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")} 1
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Polo11121/Next.js-Evento-App"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                >
                  {t("journey.timeline.2019-2020.repo")} 2
                </a>
                )
              </li>
            </ul>
            <p className="mt-4">
              {t("journey.timeline.2023-2024.createdClones")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <div className="flex flex-wrap gap-1">
                  <a
                    href="https://github.com/Polo11121/Next.js-Discord-Clone-App"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.repo")} 1
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/Polo11121/Next.js-Twitch-Clone-App"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.repo")} 2
                  </a>
                  <span>|</span>
                  <a
                    href="https://next-js-discord-clone-app.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.application")} 1
                  </a>
                  <span>|</span>
                  <a
                    href="https://nextjs14-twitch-clone-app.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.application")} 2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date="2024 - 2025"
          iconStyle={timelineStyles.iconStyle}
          icon={<SiNextdotjs />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.current.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
          </div>
          <p className="mb-2 text-sm sm:text-base">
            {t("journey.timeline.current.description")}
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>{t("journey.timeline.current.createdApps")}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <div className="flex flex-wrap gap-1">
                  <a
                    href="https://github.com/Polo11121/Next.js-Pet-Soft-App"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    Pet Soft App
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/Polo11121/React-Wordle-Game"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    Wordle Game
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/Polo11121/Next.js-Cobracase-App"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    Cobracase App
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/Polo11121/Next.js-Slack-Clone"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    Slack Clone
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm sm:text-base">
              {t("journey.timeline.current.continuing")}
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work max-w-full sm:max-w-none text-sm sm:text-base"
          contentStyle={timelineStyles.contentStyle}
          contentArrowStyle={timelineStyles.contentArrowStyle}
          date={t("journey.timeline.projects.date")}
          iconStyle={timelineStyles.iconStyle}
          icon={<SiNextdotjs />}
        >
          <h3 className="vertical-timeline-element-title text-base sm:text-lg">
            {t("journey.timeline.projects.title")}
          </h3>
          <div className="flex flex-row items-center gap-1 mb-4">
            <Tooltip>
              <TooltipTrigger>
                <FaReact color="#61DAFB" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiNextdotjs size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Next.js</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <FaCss3Alt color="#06B6D4" size={28} className="sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>Tailwind CSS</TooltipContent>
            </Tooltip>
          </div>
          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <p className="mb-2">
                {t("journey.timeline.projects.joinedProject")}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t("journey.timeline.projects.medicalChat")} </li>
                <li>{t("journey.timeline.projects.features")}</li>
                <li>{t("journey.timeline.projects.focus")}</li>
              </ul>
            </div>

            <div>
              <p className="mb-2">
                {t("journey.timeline.projects.createdWebsites")}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  {t("journey.timeline.projects.personalTrainer")} (
                  <a
                    href="https://github.com/Polo11121/Next.js-gym-trainer-site"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.repo")}
                  </a>
                  ) - {t("journey.timeline.projects.firstProject")}
                </li>
                <li>
                  {t("journey.timeline.projects.bikeRepair")} (
                  <a
                    href="https://github.com/Polo11121/zbr-rowery"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    {t("journey.timeline.2019-2020.repo")}
                  </a>
                  ) - {t("journey.timeline.projects.focusOn")}
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2">
                {t("journey.timeline.projects.currentProject")}
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  {t("journey.timeline.projects.workingOn")}{" "}
                  <a
                    href="https://github.com/Polo11121/SaaS-AI-Agent-Platform"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    SaaS-AI-Agent-Platform
                  </a>{" "}
                  {t("journey.timeline.projects.basedOn")}{" "}
                  <a
                    href="https://www.youtube.com/watch?v=xEDCEmqyvC8&t=10195s&ab_channel=CodeWithAntonio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold underline hover:text-blue-700 text-sm sm:text-base"
                  >
                    Build and Deploy a SaaS AI Agent Platform
                  </a>{" "}
                  {t("journey.timeline.projects.tutorial")}
                </li>
              </ul>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
