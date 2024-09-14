import Image from "next/image";
import React from "react";
import SkillTag from "./SkillTag";

const ProjectCard = () => {
  return (
    <div className="w-full flex flex-col gap-2 rounded-xl border border-slate-400 cursor-pointer">
      <Image
        src={"/assets/images/testimonials.png"}
        width={1000}
        height={1000}
        alt="project 1"
        className="w-full h-46 rounded-t-xl"
      />
      <div className="p-2">
        <p className="leading-relaxed">
          Collect and Showcase your testimonials. Easily gather customer
          feedback and display it beautifully on your website with our
          customizable widgets.
        </p>
        <div className="py-2 flex justify-start flex-wrap gap-2">
          <SkillTag label="React" />
          <SkillTag label="NextJS" />
          <SkillTag label="TailwindCSS" />
          <SkillTag label="Next-Auth" />
          <SkillTag label="Full-Stack" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
