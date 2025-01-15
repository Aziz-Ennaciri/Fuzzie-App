import { ContainerScroll } from "@/components/global/container-scroll-animation";
import Navbar from "@/components/global/navbar";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar />
        <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
          <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradiant(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center justify-center flex-col">

                </div>
              }>
            </ContainerScroll>
          </div>
        </section>
      </main>
    </div>
  );
}
