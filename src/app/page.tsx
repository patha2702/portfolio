import About from "@/components/About";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <About />
      <Projects />
    </main>
  );
}
