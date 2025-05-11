import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const githubUsername = "bihari-ux";

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* About Section */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            MERN Full Stack Developer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            &quot; I’m <strong>Bihari Kumar Rawat</strong>, a passionate MERN
            Full Stack Web Developer crafting modern digital experiences with
            precision and creativity. My journey into web development is powered
            by the dynamic MERN stack—MongoDB, Express.js, React.js, and
            Node.js—where JavaScript forms the magical core of my work...&quot;
          </p>
        </ItemLayout>

        {/* Quick Facts */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            &quot; 1<sub className="font-semibold text-base">Mern Stack</sub>{" "}
            &quot;
          </p>
          <p className="text-left text-sm sm:text-lg text-muted mt-2">
            &quot; I’m a professional developer helping businesses build
            high-quality digital products. &quot;
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            &quot; 1 Month &quot;
          </p>
          <p className="text-left text-sm sm:text-base text-muted mt-2">
            &quot; Completed{" "}
            <strong>6 months full-time MERN Stack training</strong> at{" "}
            <strong>Ducat</strong> with a certificate. Gained hands-on
            experience building full-stack web applications. &quot;
          </p>
        </ItemLayout>

        {/* Top Languages */}
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-4">
            &quot; Languages &quot;
          </h3>
          <div className="grid grid-cols-5 gap-4 justify-center">
            {[
              { icon: FaHtml5, label: "HTML", color: "text-orange-500" },
              { icon: FaCss3Alt, label: "CSS", color: "text-blue-500" },
              { icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
              { icon: FaReact, label: "React.js", color: "text-blue-500" },
              { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
              { icon: SiExpress, label: "Express.js", color: "text-gray-600" },
              { icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
              {
                icon: FaBootstrap,
                label: "Bootstrap",
                color: "text-purple-500",
              },
              {
                icon: SiTailwindcss,
                label: "Tailwind",
                color: "text-teal-500",
              },
            ].map(({ icon: Icon, label, color }, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center justify-between h-32"
              >
                <Icon className={`${color} text-4xl`} />
                <p className="mt-2 text-xs sm:text-sm">&quot; {label} &quot;</p>
              </div>
            ))}
          </div>
        </ItemLayout>

        {/* Social Media */}
        <ItemLayout className="col-span-full md:col-span-8 !p-4">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-12">
            Social Media
          </h3>
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
              href="https://x.com/BihariKuma50873"
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
        </ItemLayout>

        {/* Skill Icons Section */}
        <ItemLayout className="col-span-full">
          <image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* Thoughts & GitHub Streak */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <h3 className="text-center text-light font-semibold text-lg md:text-xl mb-12">
            Thoughts
          </h3>
          <div className="text-center mb-6">
            <p className="text-md sm:text-lg font-semibold text-white-700">
              &quot;Consistency is the key to success. Keep your streak alive,
              and growth will follow.&quot;
            </p>
            <p className="text-sm sm:text-md text-gray-500 mt-2">
              &quot;Small daily improvements lead to stunning results.&quot;
            </p>
          </div>
          {/* Optional: GitHub streak stats image or component */}
        </ItemLayout>

        {/* Team Work Section */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <h3 className="text-center font-semibold text-lg md:text-xl mb-6">
            Team Work
          </h3>
          <p className="text-center mb-6 text-sm sm:text-base text-blue-600 max-w-3xl mx-auto px-4">
            &quot; This repositor Nextjs contentlayer blog showcases our
            collaborative efforts in building a modern blog with Next js and
            Contentlayer The project highlights our collective skills in
            software development Check out our teams progress! &quot;
          </p>
          <div className="text-center">
            <a
              href="https://github.com/bihari-ux/Nextjs-contentlayer-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
