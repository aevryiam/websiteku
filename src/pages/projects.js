import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import comingsoon from "../../public/images/projects/comingsoon.png";
import loading from "../../public/images/projects/cs2.gif";
import proj1 from "../../public/images/projects/kpukmteti24.png"
import proj2 from "../../public/images/projects/findit25.png"
import proj3 from "../../public/images/projects/go.png"
import proj4 from "../../public/images/projects/portfolio.png"

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 
             p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded-lg
              mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | By I'am</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="From Imagination to Infinity ✨"
            className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-24 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Web Development"
                tools="Nextjs | Tailwind CSS | Firebase"
                title="KPU KMTETI 2024"
                summary="Official website of KPU KMTETI 2024, built with Nextjs and Tailwind CSS."
                img={proj1}
                date="November 2024"
                link="https://technocracy.web.id"
                github="https://github.com/IT-KPUKMTETI2024-KejarTayangEdition"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="React | Tailwind CSS | Express.js"
                title="FindIT UGM 2025"
                img={proj2}
                date="2025"
                link="https://find-it.id"
                github="https://github.com/findit25-UGM"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="React | Tailwind CSS | Express.js"
                title="Technocorner UGM 2025"
                img={comingsoon}
                date="2025"
                link="https://technocorner.id"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Web Development"
                tools="Nextjs | Tailwind CSS | Framer Motion"
                title="Portofolio Website"
                img={proj4}
                date="2024"
                link="https://aboutiamyw.vercel.app"
                github=""
                />
              </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="BackEnd API"
                tools="Go | MongoDB"
                title="Book Management API"
                img={proj3}
                date="2024"
                link="https://github.com/aevryiam/Pelatihan-KMTETI-GoHTTP"
                github=""
                />
              </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Algorithm Visualization"
                tools="Next.js | React | TypeScript | Tailwind CSS"
                title="Dijkstra & A* Pathfinder"
                img={comingsoon}
                date="2025"
                link="https://github.com/aevryiam/pathfinder"
                github=""
                />
              </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Discord Bot"
                tools="JavaScript | Discord.js | Node.js"
                title="Auto Reply Bot Discord"
                img={comingsoon}
                date="2025"
                link="https://github.com/aevryiam/discord_autoreply_bot"
                github=""
                />
              </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Algorithm Implementation"
                tools="C++ | ASCII Map Visualization"
                title="A* Algorithm (C++)"
                img={comingsoon}
                date="2025"
                link="https://github.com/aevryiam/ASD-AStar-Algorithm-Map"
                github=""
                />
              </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Algorithm Implementation"
                tools="C++ | ASCII Map Visualization"
                title="Dijkstra Algorithm (C++)"
                img={comingsoon}
                date="2025"
                link="https://github.com/aevryiam/ASD-Dijkstra-Algorithm-Map"
                github=""
                />
              </div>
          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">
              <Article
                title="Adding more soon, thanks for the interest!"
                img={loading}
                time="1 min read"
                date=""
                link="https://github.com/aevryiam"
              />
            </ul>

            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                Back to Home
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
