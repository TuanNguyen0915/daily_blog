"use client"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
const ThemeControl = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-1000 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 text-primary transition-all duration-1000 dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ThemeControl
