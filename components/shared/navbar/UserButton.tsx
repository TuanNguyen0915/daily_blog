"use client"
import React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import { navLinks } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const UserButton = () => {
  const pathName = usePathname()
  return (
    <Popover>
      <PopoverTrigger className="relative h-14 w-14 rounded-full ring-muted-foreground hover:ring-1">
        <Image
          src="/assets/avatar.jpeg"
          alt="avatar"
          fill
          className="rounded-full object-cover object-center"
        />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <p className="text-2xl font-bold tracking-wide">Tuan Nguyen</p>
          <p className="italic text-muted-foreground">@tuannguyen@gmail.com</p>
        </div>
        <div className="my-4 h-[1px] w-full border" />
        <div className="flexCol w-full gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === pathName
            return (
              <div key={link.name} className="group w-full space-y-2">
                <Link href={link.href} className="text-lg font-medium">
                  <div
                    className={`flexBetween ${isActive ? "pl-4 text-foreground" : "text-muted-foreground"}`}
                  >
                    <p>{link.name}</p> <p>{link.icon}</p>
                  </div>
                </Link>
                <div
                  className={`${isActive ? "w-full" : "w-0"} h-[1px] bg-primary transition-all duration-300 group-hover:w-full`}
                />
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default UserButton
