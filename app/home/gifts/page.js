import clsx from "clsx";
import { Koulen } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Gifts() {
    return (
        <div className={clsx("bg-[#653780] min-h-screen text-white", koulen.className)}>
            <div className="flex items-center justify-center p-6">
                <Image src="/gift.png" alt="Calendar" width={80} height={80} />
                <h2 className={clsx("text-2xl lg:text-6xl font-bold ml-4", koulen.className)}>GIFTS</h2>
            </div>
            <div className="flex flex-wrap gap-6 p-8 md:p-16 min-h-screen w-full bg-[#DCC6E9] text-[#9C3586] rounded-t-3xl md:rounded-t-[116px]">
                <div id="header" className="flex-1">
                    <h3 className="text-3xl text-center" >PARTICIPANTS</h3>
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
                <div id="header" className="flex-1">
                    <h3 className="text-3xl text-center" >MATCH</h3>
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
            <div className="bg-[#DCC6E9] px-16 pb-6 flex flex-col lg:flex-row items-center justify-end gap-2">
                <button className="bg-[#E63950] text-white px-6 py-2 text-xl hover:bg-[#bb3c4d] rounded-lg lg:w-1/3 w-full">EXCHANGE GIFTS</button>
            </div>
        </div>
    )
}