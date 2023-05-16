"use client"
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from "next/navigation"

interface NavItem {
    name: string
    href: string
}
const navigation: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Ban Na Lao', href: '/travel/1' },
    { name: 'Po Lan Ka', href: '/travel/2' },
]

const Sidebar = () => {
    const currentPath = usePathname()
    const { theme } = useTheme()
    return (
        <aside className='bg-gray-100 w-56 min-h-screen'>
            <div className="flex flex-col">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`${currentPath === item.href ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'},
                        pl-3 pb-1 pt-1
                        `}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar