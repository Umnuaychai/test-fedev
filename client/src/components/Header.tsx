"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

interface NavItem {
    name: string
    href: string
}
const navigation: NavItem[] = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
]
const Header = () => {
    const currentPath = usePathname()
    return (
        <header className="w-full bg-slate-400 flex justify-between py-2 px-2">
            <ThemeToggle />
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className='text-green-300 blue:bg-blue-500'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header