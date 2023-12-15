import Image from "next/image";
import Button from "./components/button";
import NightDayButton from "./components/themes/theme-switcher";

// bg-[#17212C]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b dark:bg-dark-primary bg-light-primary">
      <div className="h-max min-h-[15vh]" />

      <div className="h-56 flex justify-center items-center text-center">
        <Image
          src="/images/profile.jpg"
          alt="Example Image"
          quality={100}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center items-center text-center h-12 dark:text-dark-tertiary text-light-tertiary text-1xl font-bold">
        <span>Engineer</span>
        <span className="w-4">&#x00B7;</span>
        <span>Developer</span>
        <span className="w-4">&#x00B7;</span>
        <span>Learning Enthusiast</span>
      </div>

      <div className="h-12 flex text-3xl md:text-5xl justify-center items-center text-center dark:text-dark-text text-light-text font-bold tracking-tighter">
        <span className="align-middle whitespace-nowrap">
          Jonathan Bartolome
        </span>
      </div>

      <div className="flex text-1xl h-20 dark:text-dark-text text-light-text justify-center items-center text-center">
        <div className="grow"></div>
        <div className="grow-0 w-108">
          Learn more or connect via one of the options below!
        </div>
        <div className="grow"></div>
      </div>

      <div className="h-3 md:h-8"></div>

      <div className="flex">
        <div className="grow w-16"></div>
        <div className="grow min-w-3xl max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-6">
          <Button src="/images/github.png" desc="Github" />
          <Button src="/images/github.png" desc="Resume" />
          <Button src="/images/github.png" desc="Portfolio" />
          <Button src="/images/github.png" desc="LinkedIn" />
          <Button src="/images/github.png" desc="Instagram" />
          <Button src="/images/github.png" desc="Cats" />
        </div>
        <div className="grow w-16"></div>
      </div>

      <div className="h-16" />

      <div className="flex w-full justify-end fixed z-10 top-2">
        <NightDayButton/>
        <div className="w-2"></div>
      </div>

      <div className="h-16"></div>
      <div></div>
    </main>
  );
}
