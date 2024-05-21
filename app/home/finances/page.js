import clsx from "clsx";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { Koulen } from "next/font/google";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"


const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Finance() {
    return (
        <div className={clsx("bg-[#F89F5B] min-h-screen text-white", koulen.className)}>
            <div className="flex items-center justify-center p-6">
                <Image src="/finance.png" alt="Calendar" width={80} height={80} />
                <h2 className={clsx("text-2xl lg:text-6xl font-bold ml-4", koulen.className)}>FINANCE</h2>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#FFF6EC] rounded-t-[116px]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th className="w-1/6 p-2 text-left text-orange-500">TYPE</th>
              <th className="w-2/6 p-2 text-left text-orange-500">PARTICULARS</th>
              <th className="w-1/6 p-2 text-left text-orange-500">DATE</th>
              <th className="w-1/6 p-2 text-left text-orange-500">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="text-orange-500">
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td className="p-2">
                  <select className="w-full p-2 border rounded-md focus:outline-none">
                    <option value="credit" className="text-green-500">CREDIT</option>
                    <option value="debit" className="text-red-500">DEBIT</option>
                  </select>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Enter particulars"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md focus:outline-none"
                  />
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Enter amount"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <span className="p-2 bg-orange-500 text-white rounded-md">BALANCE:</span>
          <input
            type="text"
            className="ml-2 w-32 p-2 border rounded-md focus:outline-none"
            readOnly
          />
        </div>
      </div>
    </div>
            <div className="bg-[#FFF6EC] px-16 pb-6 flex flex-col lg:flex-row items-center gap-2">
                <button className="bg-orange-600 text-white px-6 py-2 text-xl hover:bg-orange-700 rounded-lg lg:w-1/3 w-full">ADD ITEM</button>
            </div>
        </div>
    )
}