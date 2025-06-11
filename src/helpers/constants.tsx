import {
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHome,
  FaHtml5,
  FaNpm,
  FaNodeJs,
  FaReact,
  FaTools,
  FaYarn,
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
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
  SiGmail,
  SiTestinglibrary,
  SiWebpack,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

export const useNavigationLinks = () => {
  const { t } = useTranslation();

  return [
    { href: "/", Icon: FaHome, label: t("navigation.home") },
    {
      href: "/my-journey",
      Icon: RiTreasureMapLine,
      label: t("navigation.myStory"),
    },
    { href: "/skills", Icon: FaTools, label: t("navigation.skills") },
    { href: "/portfolio", Icon: FaCode, label: t("navigation.portfolio") },
    { href: "/contact", Icon: SiGmail, label: t("navigation.contact") },
  ];
};

export const BASIC_SKILLS = [
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express", Icon: SiExpress },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Cypress", Icon: SiCypress },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "Testing Library", Icon: SiTestinglibrary, color: "#E33332" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Material-UI (MUI)", Icon: SiMui, color: "#007FFF" },
  { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
  { name: "Prisma", Icon: SiPrisma },
];

export const ADVANCED_skills = [
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
  { name: "React Router", Icon: SiReactrouter, color: "#CA4245" },
  { name: "React Hook Form", Icon: SiReacthookform, color: "#EC5990" },
  { name: "Zod", Icon: SiZod, color: "#005BAC" }, // Placeholder for Zod
  { name: "Git", Icon: FaGitAlt, color: "#F34F29" },
  { name: "npm", Icon: FaNpm, color: "#CB3837" },
  { name: "yarn", Icon: FaYarn, color: "#2C8EBB" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "Prettier", Icon: SiPrettier, color: "#F7B93E" },
  { name: "ESLint", Icon: SiEslint, color: "#4B32C3" },
  { name: "Axios", Icon: SiAxios, color: "#5A29E4" },
  { name: "GitHub", Icon: FaGithub },
  { name: "BEM", Icon: SiBem },
  { name: "CSS Modules", Icon: SiCssmodules, color: "#0078D4" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Shadcn/UI", Icon: SiShadcnui, color: "#6366F1" },
  { name: "Zustand", url: "/zustand.svg" },
];

export const PROJECTS_EN = [
  {
    title: "ZBR ROWERY",
    image: "/zbr-rowery.jpg",
    applicationLink: "https://www.zbr-rowery.pl/",
    description:
      "A fully responsive website for a local bike service. Built with modern React tools and best practices, the site features smooth navigation, optimized performance, and clean UI, showcasing services, a photo gallery, and a contact form.",
    githubLink: "https://github.com/Polo11121/zbr-rowery",
  },
  {
    title: "Gym Coach Monika",
    description:
      "A portfolio website showcasing the services and expertise of gym coach Monika, featuring her workout plans and client testimonials.",
    image: "/gym-coach-monika.jpg",
    applicationLink: "https://www.monikahabant.pl/",
    githubLink: "https://github.com/Polo11121/Next.js-gym-trainer-site",
  },
  {
    title: "Refresh Token Auth Project",
    image: "/refresh-token-auth-project.jpg",
    githubLink: "https://github.com/Polo11121/React-Refresh-Access-Token-Auth",
    applicationLink: "https://react-refresh-access-token-auth.vercel.app/",
    description:
      "An application designed to test authentication using refresh and access tokens, showcasing secure token management in React.",
  },
  {
    title: "Slack Clone",
    githubLink: "https://github.com/Polo11121/Next.js-Slack-Clone",
    description:
      "A full-stack project built with Next.js, React, Tailwind, Auth.js.",
    image: "/slack-clone.jpg",
  },
  {
    title: "React Wordle Game",
    applicationLink: "https://react-wordle-game-five.vercel.app",
    description: "A simple Wordle game built with React.",
    githubLink: "https://github.com/Polo11121/React-Wordle-Game",
    image: "/wordle-game.jpg",
  },
  {
    title: "Cobracase App",
    githubLink: "https://github.com/Polo11121/Next.js-Cobracase-App",
    applicationLink: "https://next-js-cobracase-app.vercel.app",
    description:
      "A case management application built with Next.js, featuring advanced React patterns and custom hooks.",
    image: "/cobracase.jpg",
  },
  {
    title: "Pet Soft App",
    githubLink: "https://github.com/Polo11121/Next.js-Pet-Soft-App",
    applicationLink: "https://next-js-pet-soft-app.vercel.app",
    description:
      "A pet management application developed with Next.js, showcasing dynamic routing and Tailwind CSS.",
    image: "/pet-soft.jpg",
  },
  {
    title: "Evento App",
    githubLink: "https://github.com/Polo11121/Next.js-Evento-App",
    applicationLink: "https://next-js-evento-app.vercel.app",
    description:
      "An event management platform built with Next.js, featuring server-side rendering and an intuitive UI.",
    image: "/evento.jpg",
  },
  {
    title: "Discord Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Discord-Clone-App",
    applicationLink: "https://next-js-discord-clone-app.vercel.app",
    description:
      "A Discord-inspired clone built with Next.js, using real-time data and Tailwind CSS.",
    image: "/discord-clone.jpg",
  },
  {
    title: "Threads Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Threads-Clone-App",
    applicationLink: "https://nextjs13-threads-clone-app.vercel.app",
    description:
      "A Threads-inspired clone developed with Next.js, focusing on responsive design and dynamic content.",
    image: "/threads-clone.jpg",
  },
  {
    title: "React Router V6 Test App",
    githubLink: "https://github.com/Polo11121/React-Router-V6-Test-App",
    applicationLink: "https://react-router-v6-test-app.vercel.app",
    description:
      "A testing project exploring the latest features of React Router V6.",
    image: "/react-router-v6-test.jpg",
  },
  {
    title: "React Query V5 Test App",
    githubLink: "https://github.com/Polo11121/React-Query-V5-Test-App",
    applicationLink: "https://react-query-v5-test-app.vercel.app",
    description:
      "A demonstration project showcasing the capabilities of React Query V5.",
    image: "/react-query-v5-test.jpg",
  },
  {
    title: "React Zustand Test App",
    githubLink: "https://github.com/Polo11121/React-Zustand-Test-App",
    applicationLink: "https://react-zustand-test-app.vercel.app",
    description:
      "A project demonstrating state management using Zustand in a React application.",
    image: "/react-zustand-test.jpg",
  },
  {
    title: "RTK Query Test App",
    githubLink: "https://github.com/Polo11121/RTK-Query-Test-App",
    applicationLink: "https://rtk-query-test-app.vercel.app",
    description:
      "A project exploring data fetching and caching capabilities of RTK Query.",
    image: "/rtk-query-test.jpg",
  },
  {
    title: "Image Gallery Test App",
    githubLink: "https://github.com/Polo11121/Next.js-Image-Gallery-Test-App",
    applicationLink: "https://nextjs13-image-gallery-indol.vercel.app",
    description:
      "An image gallery application built with Next.js, featuring optimized image rendering.",
    image: "/image-gallery-test.jpg",
  },
  {
    title: "Data Fetching Test App",
    githubLink: "https://github.com/Polo11121/Next.js-Data-Fetching-Test-App",
    applicationLink: "https://nextjs-data-fetching-test-app.vercel.app",
    description:
      "A project demonstrating various data fetching methods in Next.js.",
    image: "/data-fetching-test.jpg",
  },
  {
    title: "Twitch Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Twitch-Clone-App",
    applicationLink: "https://nextjs14-twitch-clone-app.vercel.app",
    description:
      "A Twitch-inspired streaming platform built with Next.js, focusing on real-time interactivity.",
    image: "/twitch-clone.jpg",
  },
  {
    title: "The Wild Oasis App",
    githubLink:
      "https://github.com/Polo11121/The-Ultimate-React-Course-2024-The-Wild-Oasis-App",
    applicationLink:
      "https://the-ultimate-react-course-2024-the-wild-oasis-app.vercel.app",
    description:
      "A comprehensive React application created as part of the Ultimate React Course 2024.",
    image: "/wild-oasis.jpg",
  },
  {
    title: "Fast Pizza App",
    githubLink:
      "https://github.com/Polo11121/The-Ultimate-React-Course-2024-Fast-Pizza-App",
    applicationLink:
      "https://the-ultimate-react-course-2024-fast-pizza-app.vercel.app",
    description:
      "An online pizza ordering application built with React, focusing on performance and user experience.",
    image: "/fast-pizza.jpg",
  },
  {
    title: "Auth Project",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/auth-project",
    applicationLink: "https://nextjs-auth-project-two.vercel.app",
    description:
      "A project exploring authentication flows in Next.js as part of a comprehensive course.",
    image: "/auth-project.jpg",
  },
  {
    title: "Blog Project",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/blog-project",
    applicationLink: "https://nextjs-blog-project-rosy-alpha.vercel.app/",
    description:
      "A simple blog application showcasing Next.js basics and dynamic routing.",
    image: "/blog-project.jpg",
  },
  {
    title: "Next.js Basics",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/nextjs-basics",
    applicationLink: "https://nextjs-basics-xi.vercel.app",
    description:
      "A foundational project covering the basics of Next.js as part of an online course.",
    image: "/nextjs-basics.jpg",
  },
  {
    title: "Ecommerce Admin App",
    githubLink: "https://github.com/Polo11121/Next.js-Ecommerce-Admin-App",
    applicationLink: "https://nextjs-ecommerce-admin-project.vercel.app",
    description:
      "An admin panel for managing an ecommerce platform, built with Next.js and Tailwind CSS.",
    image: "/ecommerce-admin.jpg",
  },
  {
    title: "Ecommerce Store App",
    githubLink: "https://github.com/Polo11121/Next.js-Ecommerce-Store-App",
    applicationLink: "https://nextjs-ecommerce-store-project.vercel.app",
    description:
      "A modern ecommerce store built with Next.js, featuring responsive design and optimized performance.",
    image: "/ecommerce-store.jpg",
  },
  {
    title: "Booking App",
    githubLink: "https://github.com/Polo11121/Next.js-Booking-App",
    applicationLink: "https://nextj13-booking-project.vercel.app",
    description:
      "A booking platform built with Next.js, featuring date selection and form validation.",
    image: "/booking.jpg",
  },
  {
    title: "Meetups App",
    githubLink: "https://github.com/Polo11121/Next.js-Meetups-App",
    applicationLink: "https://nextjs13-meetups.vercel.app",
    description:
      "A meetup management app developed with Next.js, showcasing dynamic content and routing.",
    image: "/meetups.jpg",
  },
  {
    title: "Live Chat App",
    githubLink: "https://github.com/Polo11121/React-Live-Chat-App",
    applicationLink: "https://react-live-chat-app.vercel.app",
    description:
      "A real-time chat application built with React, utilizing WebSocket for live communication.",
    image: "/live-chat.jpg",
  },
  {
    title: "Amazon Clone App",
    githubLink: "https://github.com/Polo11121/React-Amazon-Clone-App",
    applicationLink: "https://react-amazon-clone-app.vercel.app",
    description:
      "An Amazon-inspired ecommerce application built with React, focusing on UI and cart functionality.",
    image: "/amazon-clone.jpg",
  },
];

export const PROJECTS_PL = [
  {
    title: "ZBR ROWERY",
    image: "/zbr-rowery.jpg",
    applicationLink: "https://www.zbr-rowery.pl/",
    description:
      "W pełni responsywna strona internetowa dla lokalnego serwisu rowerowego. Zbudowana z wykorzystaniem nowoczesnych narzędzi React i najlepszych praktyk, strona charakteryzuje się płynną nawigacją, zoptymalizowaną wydajnością i czystym interfejsem, prezentując usługi, galerię zdjęć i formularz kontaktowy.",
    githubLink: "https://github.com/Polo11121/zbr-rowery",
  },
  {
    title: "Gym Coach Monika",
    description:
      "Strona portfolio prezentująca usługi i doświadczenie trenerki Moniki, zawierająca jej plany treningowe i opinie klientów.",
    image: "/gym-coach-monika.jpg",
    applicationLink: "https://www.monikahabant.pl/",
    githubLink: "https://github.com/Polo11121/Next.js-gym-trainer-site",
  },
  {
    title: "Refresh Token Auth Project",
    image: "/refresh-token-auth-project.jpg",
    githubLink: "https://github.com/Polo11121/React-Refresh-Access-Token-Auth",
    applicationLink: "https://react-refresh-access-token-auth.vercel.app/",
    description:
      "Aplikacja zaprojektowana do testowania uwierzytelniania przy użyciu tokenów odświeżania i dostępu, prezentująca bezpieczne zarządzanie tokenami w React.",
  },
  {
    title: "Slack Clone",
    githubLink: "https://github.com/Polo11121/Next.js-Slack-Clone",
    description:
      "Projekt full-stack zbudowany z Next.js, React, Tailwind, Auth.js.",
    image: "/slack-clone.jpg",
  },
  {
    title: "React Wordle Game",
    applicationLink: "https://react-wordle-game-five.vercel.app",
    description: "Prosta gra Wordle zbudowana w React.",
    githubLink: "https://github.com/Polo11121/React-Wordle-Game",
    image: "/wordle-game.jpg",
  },
  {
    title: "Cobracase App",
    githubLink: "https://github.com/Polo11121/Next.js-Cobracase-App",
    applicationLink: "https://next-js-cobracase-app.vercel.app",
    description:
      "Aplikacja do zarządzania sprawami zbudowana w Next.js, wykorzystująca zaawansowane wzorce React i własne hooki.",
    image: "/cobracase.jpg",
  },
  {
    title: "Pet Soft App",
    githubLink: "https://github.com/Polo11121/Next.js-Pet-Soft-App",
    applicationLink: "https://next-js-pet-soft-app.vercel.app",
    description:
      "Aplikacja do zarządzania zwierzętami domowymi opracowana w Next.js, prezentująca dynamiczne routing i Tailwind CSS.",
    image: "/pet-soft.jpg",
  },
  {
    title: "Evento App",
    githubLink: "https://github.com/Polo11121/Next.js-Evento-App",
    applicationLink: "https://next-js-evento-app.vercel.app",
    description:
      "Platforma do zarządzania wydarzeniami zbudowana w Next.js, wykorzystująca renderowanie po stronie serwera i intuicyjny interfejs.",
    image: "/evento.jpg",
  },
  {
    title: "Discord Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Discord-Clone-App",
    applicationLink: "https://next-js-discord-clone-app.vercel.app",
    description:
      "Klon Discord zbudowany w Next.js, wykorzystujący dane w czasie rzeczywistym i Tailwind CSS.",
    image: "/discord-clone.jpg",
  },
  {
    title: "Threads Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Threads-Clone-App",
    applicationLink: "https://nextjs13-threads-clone-app.vercel.app",
    description:
      "Klon Threads opracowany w Next.js, skupiający się na responsywnym designie i dynamicznej treści.",
    image: "/threads-clone.jpg",
  },
  {
    title: "React Router V6 Test App",
    githubLink: "https://github.com/Polo11121/React-Router-V6-Test-App",
    applicationLink: "https://react-router-v6-test-app.vercel.app",
    description:
      "Projekt testowy eksplorujący najnowsze funkcje React Router V6.",
    image: "/react-router-v6-test.jpg",
  },
  {
    title: "React Query V5 Test App",
    githubLink: "https://github.com/Polo11121/React-Query-V5-Test-App",
    applicationLink: "https://react-query-v5-test-app.vercel.app",
    description:
      "Projekt demonstracyjny prezentujący możliwości React Query V5.",
    image: "/react-query-v5-test.jpg",
  },
  {
    title: "React Zustand Test App",
    githubLink: "https://github.com/Polo11121/React-Zustand-Test-App",
    applicationLink: "https://react-zustand-test-app.vercel.app",
    description:
      "Projekt demonstracyjny zarządzania stanem przy użyciu Zustand w aplikacji React.",
    image: "/react-zustand-test.jpg",
  },
  {
    title: "RTK Query Test App",
    githubLink: "https://github.com/Polo11121/RTK-Query-Test-App",
    applicationLink: "https://rtk-query-test-app.vercel.app",
    description:
      "Projekt eksplorujący możliwości pobierania i cachowania danych RTK Query.",
    image: "/rtk-query-test.jpg",
  },
  {
    title: "Image Gallery Test App",
    githubLink: "https://github.com/Polo11121/Next.js-Image-Gallery-Test-App",
    applicationLink: "https://nextjs13-image-gallery-indol.vercel.app",
    description:
      "Aplikacja galerii zdjęć zbudowana w Next.js, prezentująca zoptymalizowane renderowanie obrazów.",
    image: "/image-gallery-test.jpg",
  },
  {
    title: "Data Fetching Test App",
    githubLink: "https://github.com/Polo11121/Next.js-Data-Fetching-Test-App",
    applicationLink: "https://nextjs-data-fetching-test-app.vercel.app",
    description:
      "Projekt demonstracyjny różnych metod pobierania danych w Next.js.",
    image: "/data-fetching-test.jpg",
  },
  {
    title: "Twitch Clone App",
    githubLink: "https://github.com/Polo11121/Next.js-Twitch-Clone-App",
    applicationLink: "https://nextjs14-twitch-clone-app.vercel.app",
    description:
      "Platforma streamingowa inspirowana Twitch, zbudowana w Next.js, skupiająca się na interaktywności w czasie rzeczywistym.",
    image: "/twitch-clone.jpg",
  },
  {
    title: "The Wild Oasis App",
    githubLink:
      "https://github.com/Polo11121/The-Ultimate-React-Course-2024-The-Wild-Oasis-App",
    applicationLink:
      "https://the-ultimate-react-course-2024-the-wild-oasis-app.vercel.app",
    description:
      "Kompleksowa aplikacja React stworzona w ramach Ultimate React Course 2024.",
    image: "/wild-oasis.jpg",
  },
  {
    title: "Fast Pizza App",
    githubLink:
      "https://github.com/Polo11121/The-Ultimate-React-Course-2024-Fast-Pizza-App",
    applicationLink:
      "https://the-ultimate-react-course-2024-fast-pizza-app.vercel.app",
    description:
      "Aplikacja do zamawiania pizzy online zbudowana w React, skupiająca się na wydajności i doświadczeniu użytkownika.",
    image: "/fast-pizza.jpg",
  },
  {
    title: "Auth Project",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/auth-project",
    applicationLink: "https://nextjs-auth-project-two.vercel.app",
    description:
      "Projekt eksplorujący przepływy uwierzytelniania w Next.js jako część kompleksowego kursu.",
    image: "/auth-project.jpg",
  },
  {
    title: "Blog Project",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/blog-project",
    applicationLink: "https://nextjs-blog-project-rosy-alpha.vercel.app/",
    description:
      "Prosta aplikacja blogowa prezentująca podstawy Next.js i dynamiczne routing.",
    image: "/blog-project.jpg",
  },
  {
    title: "Next.js Basics",
    githubLink:
      "https://github.com/Polo11121/Next.js-14-React-The-Complete-Guide-Udemy-Course/tree/main/nextjs-basics",
    applicationLink: "https://nextjs-basics-xi.vercel.app",
    description:
      "Projekt podstawowy obejmujący podstawy Next.js jako część kursu online.",
    image: "/nextjs-basics.jpg",
  },
  {
    title: "Ecommerce Admin App",
    githubLink: "https://github.com/Polo11121/Next.js-Ecommerce-Admin-App",
    applicationLink: "https://nextjs-ecommerce-admin-project.vercel.app",
    description:
      "Panel administracyjny do zarządzania platformą e-commerce, zbudowany w Next.js i Tailwind CSS.",
    image: "/ecommerce-admin.jpg",
  },
  {
    title: "Ecommerce Store App",
    githubLink: "https://github.com/Polo11121/Next.js-Ecommerce-Store-App",
    applicationLink: "https://nextjs-ecommerce-store-project.vercel.app",
    description:
      "Nowoczesny sklep e-commerce zbudowany w Next.js, charakteryzujący się responsywnym designem i zoptymalizowaną wydajnością.",
    image: "/ecommerce-store.jpg",
  },
  {
    title: "Booking App",
    githubLink: "https://github.com/Polo11121/Next.js-Booking-App",
    applicationLink: "https://nextj13-booking-project.vercel.app",
    description:
      "Platforma rezerwacyjna zbudowana w Next.js, zawierająca wybór dat i walidację formularzy.",
    image: "/booking.jpg",
  },
  {
    title: "Meetups App",
    githubLink: "https://github.com/Polo11121/Next.js-Meetups-App",
    applicationLink: "https://nextjs13-meetups.vercel.app",
    description:
      "Aplikacja do zarządzania spotkaniami opracowana w Next.js, prezentująca dynamiczną treść i routing.",
    image: "/meetups.jpg",
  },
  {
    title: "Live Chat App",
    githubLink: "https://github.com/Polo11121/React-Live-Chat-App",
    applicationLink: "https://react-live-chat-app.vercel.app",
    description:
      "Aplikacja czatu w czasie rzeczywistym zbudowana w React, wykorzystująca WebSocket do komunikacji na żywo.",
    image: "/live-chat.jpg",
  },
  {
    title: "Amazon Clone App",
    githubLink: "https://github.com/Polo11121/React-Amazon-Clone-App",
    applicationLink: "https://react-amazon-clone-app.vercel.app",
    description:
      "Aplikacja e-commerce inspirowana Amazon, zbudowana w React, skupiająca się na interfejsie i funkcjonalności koszyka.",
    image: "/amazon-clone.jpg",
  },
];

export const GITHUB_LINK = "https://github.com/Polo11121";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/micha%C5%82-jasi%C5%84ski-73b0692b6";

export const GMAIL_LINK = "mailto:michal.jasinski121@gmail.com";
