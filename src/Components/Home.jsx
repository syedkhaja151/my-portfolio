import "react";
import avatarImg from "../assets/7358602.png"
import TextChange from "./projects/TextChange";
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex-leading-normal tracking-tighter">
           <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Hi, I&apos;m syed khaja hassan baghtiyar, a passionate Front-End Developer specializing in creating responsive and interactive web experiences,
        I have expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js,Scroll down to see my work or reach out to collaborate on exciting projects!
        </p>
        <button
          className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300
             hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div> <img  className="" src={avatarImg} alt="" /></div>
    </div>
  );
};

export default Home;
