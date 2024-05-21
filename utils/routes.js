import { Calendar, Coins, GiftIcon, ListChecks } from "lucide-react";

const routes = [
    {
        routename: 'Finances',
        href: '/home/finances',
        icon: '/finance.png',
        color: '#F89F5B',
        sideIcon: Coins
    },
    {
        routename: 'Preparation',
        href: '/home/preparation',
        icon: '/prep.png',
        color: '#E53F71',
        sideIcon: ListChecks
    },
    {
        routename: 'Programme',
        href: '/home/programme',
        icon: '/calendar.png',
        color: '#9C3587',
        sideIcon: Calendar
    },
    {
        routename: 'Gifts',
        href: '/home/gifts',
        icon: '/gift.png',
        color: '#653780',
        sideIcon: GiftIcon
    },
]

export { routes };