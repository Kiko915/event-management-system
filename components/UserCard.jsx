import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"


export default function UserCard() {
    return (
        <Link href="/home/profile/id">
        <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-200">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h4 className="text-sm font-bold">Username</h4>
                <p className="text-xs">user@email.com</p>
            </div>
        </div>
        </Link>
    )
}