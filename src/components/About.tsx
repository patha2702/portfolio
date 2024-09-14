import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full py-4 flex justify-start max-sm:flex-col items-center gap-4">
      <Image
        src={"/assets/images/my-image.png"}
        width={100}
        height={100}
        alt="user avatar"
        className="rounded-md"
      />
      <div className="p-4 flex flex-col gap-2 max-sm:text-center">
        <p className="text-2xl font-semibold">
          Hello, I'm <span className="font-bold">Rajendra Patha.</span>
        </p>
        <p>
          <span className="font-semibold">Software Engineer</span> transforming
          ideas into reality.
          <br />
          Building{" "}
          <Link
            href="https://testi-comments.vercel.app/"
            className="font-medium underline hover:no-underline"
          >
            testimonials-collect
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
