import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const githubUsername = "bihari-ux"; // Replace with your actual GitHub username

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            MERN Full Stack Developer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I’m <strong>Bihari Kumar Rawat</strong>, a passionate MERN Full
            Stack Web Developer crafting modern digital experiences with
            precision and creativity. My journey into web development is powered
            by the dynamic MERN stack—MongoDB, Express.js, React.js, and
            Node.js—where JavaScript forms the magical core of my work. I build
            powerful, end-to-end web applications that are fast, secure, and
            scalable. With React.js and Next.js, I create seamless user
            interfaces that feel like portals across the digital universe, while
            Node.js and Express handle the logic that keeps everything running
            smoothly behind the scenes. Inspired by the Jamstack architecture
            and driven by a strong sense of design, I ensure that every project
            is not just functional but visually captivating. From interactive
            frontends to robust backends, I merge creativity and code to build
            digital realms that leave a lasting impact. Join me as I continue to
            explore new technologies and shape the future of the web, one line
            of code at a time.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1<sub className="font-semibold text-base">Mern Stack</sub>
          </p>
          <p className="text-left text-sm sm:text-lg text-muted mt-2">
            I’m a professional developer helping businesses build high-quality
            digital products.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1 Month{" "}
          </p>
          <p className="text-left text-sm sm:text-base text-muted mt-2">
            Completed <strong>6 months full-time MERN Stack training</strong> at{" "}
            <strong>Ducat</strong> with a certificate. Gained hands-on
            experience building full-stack web applications using MongoDB,
            Express.js, React.js, and Node.js.
          </p>
        </ItemLayout>

        {/* Top Languages - Custom List */}
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-center">
            {/* Top Row */}
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaHtml5 className="text-orange-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">HTML</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaCss3Alt className="text-blue-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">CSS</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaJs className="text-yellow-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">JavaScript</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaReact className="text-blue-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">React.js</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaNodeJs className="text-green-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">Node.js</p>
            </div>

            {/* Bottom Row */}
            <div className="text-center flex flex-col items-center justify-between h-32">
              <SiExpress className="text-gray-600 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">Express.js</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <SiMongodb className="text-green-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">MongoDB</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <FaBootstrap className="text-purple-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">Bootstrap</p>
            </div>
            <div className="text-center flex flex-col items-center justify-between h-32">
              <SiTailwindcss className="text-teal-500 text-4xl" />
              <p className="mt-2 text-xs sm:text-sm">Tailwind</p>
            </div>
          </div>
        </ItemLayout>

        {/* Social Media Accounts */}
        <ItemLayout className="col-span-full md:col-span-8 !p-4">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-12 ">
            Social Media
          </h3>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-6 mb-6 text-5xl">
            <a
              href="https://wa.me/9262645718"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/biharikumar.rawat.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/babu_brand_143/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/BihariKuma50873?t=FK9yuuEjm2UNwfwm-ualNQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/bihari-kumar-rawat-8b8267273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* GitHub Stats Image */}
        </ItemLayout>

        {/* Skill Icons */}
        <ItemLayout className="col-span-full">
          <image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Streak with Thoughts */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <h3 className="text-center text-light font-semibold text-lg md:text-xl mb-12">
            Thoughts
          </h3>

          <div className="text-center mb-6">
            <p className="text-md sm:text-lg font-semibold text-white-700">
              "Consistency is the key to success. Keep your streak alive, and
              growth will follow."
            </p>
            <p className="text-sm sm:text-md text-gray-500 mt-2">
              "Small daily improvements lead to stunning results."
            </p>
          </div>

          {/* GitHub Streak Stats Section */}
          {/* Add your GitHub streak stats component or image here */}
        </ItemLayout>

        {/* Pinned Repo - Team Work */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-6">
            Team Work
          </h3>

          {/* Description Section */}
          <p className="text-center mb-6 text-sm sm:text-base text-blue-600 max-w-3xl mx-auto px-4">
            This repository, "Nextjs-contentlayer-blog," showcases our
            collaborative efforts in building a modern blog with Next.js and
            Contentlayer. The project highlights our collective skills in
            software development, from front-end design to back-end integration,
            as we work together to create a seamless and scalable application.
            Check out our team's progress and contributions!
          </p>

          {/* GitHub Repo Link with Image */}
          <Link
            href={`https://github.com/${githubUsername}?tab=repositories`}
            target="_blank"
            className="w-full"
          ></Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
