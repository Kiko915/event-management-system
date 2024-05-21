'use client';
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <header className="bg-[#3F1651] w-full px-6 py-4 shadow">
            <div className="text-white flex items-center gap-2">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon />
                </button>
                <Link href="/home"><h2 className="font-bold">GoMommy</h2></Link>
            </div>
        </header>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}