import React from "react"
import Logo from "./Logo"
import UserButton from "./UserButton"
import ThemeControl from "./ThemeControl"

const Navbar = () => {
  return (
    <div className="flexBetween rounded-lg border-b border-primary p-4">
      <Logo />
      <div className="flexCenter gap-4">
        <ThemeControl />
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
