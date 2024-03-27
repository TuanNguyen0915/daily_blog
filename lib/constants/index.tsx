import { HomeIcon, LayoutDashboardIcon, LogOut, UserIcon } from "lucide-react"

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon size={24}/>,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon size={24}/>,
  },
  {
    name: "User",
    href: "/user",
    icon: <UserIcon size={24}/>,
  },
  {
    name: "Logout",
    href: "/logout",
    icon: <LogOut size={24}/>,
  },
]
