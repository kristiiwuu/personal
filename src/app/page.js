import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1 className="text-5xl">Kristi Wu</h1>

        <div>
          <p>Computer Science + Business Administration</p>
          <p>3rd year undergraduate at the University of Southern California</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/kristiiwuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark-white.svg"
              alt="GitHub logomark"
              width={20}
              height={20}
            />
            GitHub
          </a>
          <a
            className="gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://linkedin.com/in/kristi-wu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/linkedin.svg"
              alt="LinkedIn logomark"
              width={30}
              height={30}
            />
            LinkedIn
          </a>
          <a
            className="gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
            href="mailto:kawu@usc.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/gmail.svg"
              alt="Gmail logomark"
              width={20}
              height={20}
            />
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
