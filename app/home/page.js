import { koulen } from "@/utils/Fonts"
import { routes } from "@/utils/routes"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { Koulen } from "next/font/google"

const koul = Koulen({ subsets: ['latin'], weight: ["400"]});

export default function Home() {
    return (
        <div className="min-h-screen bg-[#9C3587] bg-opacity-10">
            <div className="w-full py-12 flex items-center justify-center bg-white">
                <h3 className={`font-bold ${koul.className} bg-[#F8C35B] text-white text-3xl md:text-6xl px-4 py-2`}>EVENT MANAGEMENT</h3>
            </div>
            <div id="nav_links" className="p-20">
                <ul className="flex flex-col lg:flex-row items-center justify-around">
                {routes.map(({ routename, href, icon, color }, index) => (
                    <Link key={href} href={href} className="hover:-translate-y-2 transition mb-4">
                    <li className={clsx(` px-4 py-8 rounded-lg hover:shadow-lg flex items-center justify-center`, { "bg-[#F89F5B]":  index === 0, "bg-[#E53F71]":  index === 1, "bg-[#9C3587]":  index === 2, "bg-[#653780]":  index === 3 })}>
                       <div className="lg:hidden">
                       <Image src={icon} alt="routename" width={75} height={75} />
                       </div>
                       <div className="hidden lg:block">
                       <Image src={icon} alt="routename" width={150} height={150} />
                       </div>
                    </li>
                    <p className={clsx("text-center text-3xl mt-3 text-[#3F1651]", koul.className)}>{routename.toUpperCase()}</p>
                    </Link>
                ))}
                </ul>
            </div>
        </div> 
    )
}