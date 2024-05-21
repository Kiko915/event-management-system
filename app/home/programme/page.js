import clsx from "clsx";
import { Koulen } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Programme() {
    return (
        <div className={clsx("bg-[#9C3586] min-h-screen text-white", koulen.className)}>
            <div className="flex items-center justify-center p-6">
                <Image src="/calendar.png" alt="Calendar" width={80} height={80} />
                <h2 className={clsx("text-2xl lg:text-6xl font-bold ml-4", koulen.className)}>PROGRAMME</h2>
            </div>
            <div className="flex flex-wrap gap-6 p-12 md:p-16 min-h-screen bg-[#FFD5FD] text-[#9C3586] rounded-t-3xl md:rounded-t-[116px]">
                <div id="header" className="flex-1">
                    <h3 className="text-3xl text-center" >EVENT</h3>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                </div>
                <div id="header" className="col-span-1">
                    <h3 className="text-3xl text-center" >SPEAKER</h3>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                </div>
                <div id="header" className="col-span-1">
                    <h3 className="text-3xl text-center" >TIME</h3>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                    <div>
                        <input className="w-full my-2 p-2 border-[#9C3587] border text-xl" />
                    </div>
                </div>
            </div>
            <div className="bg-[#FFD5FD] px-16 pb-6 flex flex-col lg:flex-row items-center gap-2">
                <button className="bg-[#9C3587] text-white px-6 py-2 text-xl hover:bg-[#7a286a] rounded-lg lg:w-1/2 w-full">ADD LIST</button>
                <button className="bg-[#3F1551] text-white px-6 py-2 text-xl hover:bg-[#2c1237] rounded-lg lg:w-1/2 w-full">UPDATE LIST</button>
            </div>
        </div>
    )
}