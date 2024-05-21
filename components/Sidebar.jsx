'use client';
import Image from "next/image";
import { Titan_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserCard from "./UserCard";
import { LogOut } from "lucide-react";

const titan = Titan_One({ subsets: ["latin"], weight: "400" });

const Sidebar = ({ isOpen, setIsOpen }) => {
    const closeSidebar = () => setIsOpen(false);
    const pathname = usePathname();

    return (
      <>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed inset-0 z-10 bg-black bg-opacity-50`}
        onClick={closeSidebar}
      />
      <div
      className={`md:block ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-20 md:w-80 w-75 bg-slate-100 shadow-lg transition-transform duration-300`}
    >
      <div className="md:relative h-full">
        {/* Sidebar Content */}
        <div className="h-full px-6 py-4 overflow-y-auto relative">
          {/* Your sidebar content goes here */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo-ems.png" alt="GoMommy EMS" width={70} height={70} />
              <h3 className={cn("text-xl lg:text-3xl", titan.className)}>GoMommy</h3>
            </Link>
          </div>
          <br /> 
          <hr />
          <br />
          <ul>
            {routes.map(({ routename, href, sideIcon }) => {
            const Linkcon = sideIcon;
            return (
              <Link key={href} href={href} className={cn("flex gap-2 mb-4 mt-2 text-left px-4 py-2 rounded-lg hover:bg-gray-200 items-center", { 'text-blue-600': pathname === href })}>
                <Linkcon />
                {routename}
              </Link>
            )})}
          </ul>
          <div id="user_cont" className="absolute inset-x-0 bottom-0 m-4">
            <UserCard />
            <button className={cn("flex w-full gap-2 mb-4 mt-2 text-left px-4 py-2 rounded-lg hover:bg-red-100 items-center")}>
              <LogOut />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Sidebar;