import Image from "next/image";
import { Titan_One, Koulen } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const titan = Titan_One({ subsets: ["latin"], weight: ["400"] });
const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/home-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-center flex-col h-screen">
        <Image src="/logo-ems.png" alt="GoMommy EMS" width={200} height={200} />
        <div className="text-center mb-10">
          <h1 className={clsx("text-[#33CCCC] text-3xl md:text-6xl", titan.className)}>Go Mommy</h1>
          <p className="font-light text-xs md:text-md">Event Management System</p>
        </div>
        <div>
          <Link href="/auth/register">
            <button className={clsx("bg-[#9C3587] text-white text-2xl px-6 py-1 rounded-lg hover:bg-[#762866] hover:shadow-md ", koulen.className)}>
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
