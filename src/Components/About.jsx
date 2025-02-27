import "react";
import AboutImg from "../assets/7358653.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Hi, I&apos;m syed khaja hassan baghtiyar, a passionate web
                  developer specializing in creating dynamic and responsive
                  websites. With over 1 year of experience in frontend
                  development, I bring ideas to life using the latest
                  technology, including React and next.js . I love crafting
                  seamless user experiences and building scalable solutions.
                  I&apos;ve worked with a client, helping them elevate their
                  online presence. When I&apos;m not coding, you&apos;ll find me
                  exploring new tech trends or working on side projects. Feel
                  free to explore my portfolio and reach out if you&apos;d like
                  to collaborate or just chat about the latest in tech!
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have interacted with databases through the front end (e.g.,
                  fetching data using Firebase, MongoDB, or SQL-based APIs)
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Basic Knowledge of Backend Technologies like Node.js, Express,
                  or other backend frameworks, Emphasizing my ability to
                  collaborate with backend developers, understanding
                  server-client communication, and how frontend interacts with
                  databases.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
