import Image from "next/image";
import { titan } from "@/utils/Fonts";
import clsx from "clsx";



export default function Footer() {
    return (
        <footer className="bg-slate-50 w-full p-2">
            <div>
                <div className="flex items-center justify-center">
                    <Image src="/logo-ems.png" alt="GoMommy EMS" width={50} height={50} />
                    <h5 className={clsx("text-[#33CCCC] text-lg md:text-xl", titan.className)}>GO MOMMY</h5>
                </div>
            </div>
        </footer>
    )
}